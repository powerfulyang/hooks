import { renderHook } from '@testing-library/react-hooks';
import { UseRequest, useRequest } from '..';

describe('useRequest', () => {
  beforeAll(() => {
    UseRequest.baseUrl = 'https://api.powerfulyang.com';
  });

  it('should ', async () => {
    const requestHooks = renderHook(
      ({ id }) => {
        return useRequest({
          url: `/api/posts/${id}`,
        });
      },
      { initialProps: { id: 1 } },
    );
    const { result } = requestHooks;
    let [loading, post] = result.current;
    expect(loading).toBe(true);
    expect(post).toBeUndefined();
    await requestHooks.waitForNextUpdate();
    [loading, post] = result.current;
    expect(loading).toBe(false);
    expect(post).toHaveProperty('status', 'ok');
  });
});
