import { useEffect } from 'react';
import { Observable, Subscriber } from 'rxjs';
import { useImmer } from './useImmer';

export interface GeoLocationSensorState {
  loading: boolean;
  accuracy: number | null;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number | null;
  longitude: number | null;
  speed: number | null;
  timestamp: number | null;
  error?: Error | GeolocationPositionError;
}

export const useGeolocation = (options?: PositionOptions): GeoLocationSensorState => {
  const [state, setState] = useImmer<GeoLocationSensorState>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now(),
  });
  useEffect(() => {
    const locations = new Observable((observer: Subscriber<GeolocationPosition>) => {
      let watchId: number;
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(
          (position) => {
            observer.next(position);
          },
          (error) => {
            observer.error(error);
          },
          options,
        );
      } else {
        observer.error('Geolocation not available');
      }
      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        },
      };
    });

    const subscribe = locations.subscribe(
      (position) => {
        setState({
          loading: false,
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude,
          altitudeAccuracy: position.coords.altitudeAccuracy,
          heading: position.coords.heading,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          speed: position.coords.speed,
          timestamp: position.timestamp,
        });
      },
      (error: never) => {
        setState((draft) => {
          draft.loading = false;
          draft.error = error;
        });
      },
    );

    return () => {
      subscribe.unsubscribe();
    };
  }, [options, setState]);

  return state;
};
