# Changelog

## [1.5.0](https://github.com/powerfulyang/hooks/compare/v1.4.0...v1.5.0) (2023-04-20)


### Features

* jest from @jest/globals ([554bc3c](https://github.com/powerfulyang/hooks/commit/554bc3ca2986e9a886ebae9186862a1d387beff4))


### Bug Fixes

* pnpm .npmrc expose dependency ([ce71968](https://github.com/powerfulyang/hooks/commit/ce719688dfed7a830993a9e7a79b7f609d13f32f))
* swc didn't compile optional chaining usage in node_modules ([02892b5](https://github.com/powerfulyang/hooks/commit/02892b597b2a757e1eaa38858afbf487f671b4c2))

## [1.4.0](https://github.com/powerfulyang/hooks/compare/v1.3.0...v1.4.0) (2022-11-03)


### Features

* add unit test for usePrevious, drop some useless hooks ([e425759](https://github.com/powerfulyang/hooks/commit/e42575966f77ebaecb0040be53d79f90b7035df6))

## [1.3.0](https://github.com/powerfulyang/hooks/compare/v1.2.0...v1.3.0) (2022-09-14)


### Features

* components -> tooltip, hooks -> useLatest ([58c8253](https://github.com/powerfulyang/hooks/commit/58c8253b47e59e5fa9393a15eae0847998e310f9))
* useScrollDirection ([3a1e372](https://github.com/powerfulyang/hooks/commit/3a1e3727036214e5880684c3bb200d6eca3fca4b))


### Bug Fixes

* components -> menu, activeKey ([d9ff3ab](https://github.com/powerfulyang/hooks/commit/d9ff3ab9890078c14723753962e68792c6585fb0))
* components -> Menu:focus should listen press arrowUp/arrowDown/l/r event ([c60f279](https://github.com/powerfulyang/hooks/commit/c60f279198e65d27cbfb06c682c53799fe5e31bd))

## [1.2.0](https://github.com/powerfulyang/hooks/compare/v1.1.1...v1.2.0) (2022-09-06)


### Features

* @powerfulyang/lint@3.1.0 ([32a5c5c](https://github.com/powerfulyang/hooks/commit/32a5c5cfadcde4a1bf05c4ad528f243cc2d6f9b3))
* typescript explicitly ([9d02419](https://github.com/powerfulyang/hooks/commit/9d02419350bdb9fbfceb19a29d74e1aea40ccc97))

### [1.1.1](https://github.com/powerfulyang/hooks/compare/v1.1.0...v1.1.1) (2022-05-01)


### Bug Fixes

* declaration paths didn't transform ([aa5b5df](https://github.com/powerfulyang/hooks/commit/aa5b5dfa07e436995444b978c5e447bfdd1855f7))

## [1.1.0](https://github.com/powerfulyang/hooks/compare/v1.0.6...v1.1.0) (2022-04-30)


### Features

* new version linter ([d47f4eb](https://github.com/powerfulyang/hooks/commit/d47f4eb139e7dd81cdbed712c71e0f4a1b4ab196))

### [1.0.6](https://github.com/powerfulyang/hooks/compare/v1.0.5...v1.0.6) (2022-04-25)


### Bug Fixes

* useImmerReducer.ts import incorrect produce ([1dfd4c5](https://github.com/powerfulyang/hooks/commit/1dfd4c5e5d4bb64eab6d672c343b71a3dbb27f58))

### [1.0.5](https://github.com/powerfulyang/hooks/compare/v1.0.4...v1.0.5) (2022-04-25)


### Bug Fixes

* **tsconfig.json:** react-jsx 到底是个啥玩意啊，前端远离 tsc ([0574e63](https://github.com/powerfulyang/hooks/commit/0574e632b31e8039511aa8b9b620e8c9f34c9b43))

### [1.0.4](https://github.com/powerfulyang/hooks/compare/v1.0.3...v1.0.4) (2022-04-25)

### Bug Fixes

- **package.json:** typo ([fcc6728](https://github.com/powerfulyang/hooks/commit/fcc67284c69a5deb26b7040797d31a2511fe7fef))

### [1.0.3](https://github.com/powerfulyang/hooks/compare/v1.0.2...v1.0.3) (2022-04-25)

### Bug Fixes

- 前端打包还是 rollup 靠谱 ([238cf86](https://github.com/powerfulyang/hooks/commit/238cf863399215d1be7f307542ea80e525278769))

### [1.0.2](https://github.com/powerfulyang/hooks/compare/v1.0.0...v1.0.2) (2022-04-24)

### Bug Fixes

- fix(deps): update dependency @powerfulyang/lint to v1.0.2 ([8629843](https://github.com/powerfulyang/hooks/commit/8629843a78d46681c62c2ebcc538f97ebd7b589a))
- usePortal.ts define incorrectly ([cd9068c](https://github.com/powerfulyang/hooks/commit/cd9068cb58ec307ddf13090ed725ff9a12cf2168))

### Miscellaneous Chores

- release 1.0.2 ([f67ac66](https://github.com/powerfulyang/hooks/commit/f67ac6627df6cc50a2f722df0dffb213338ea36d))

### [1.0.1](https://github.com/powerfulyang/hooks/compare/v1.0.0...v1.0.1) (2022-04-24)

### Bug Fixes

- usePortal.ts define incorrectly ([52322a6](https://github.com/powerfulyang/hooks/commit/52322a61c09d2d78ffc7d9704d2f58ec1d231b94))

## 1.0.0 (2022-04-23)

### Features

- configure for automated publication and actions ([a085a5d](https://github.com/powerfulyang/hooks/commit/a085a5d8dc7b3fd2726b1a31c151127071a49102))
- renovate ([2514c3f](https://github.com/powerfulyang/hooks/commit/2514c3ff247be30a0645e8cab549e1a7a006f064))
- storybook ([ae622e7](https://github.com/powerfulyang/hooks/commit/ae622e75457047c0ef5fd704479fb94d091d589d))
- useDocumentVisible.tsx ([da9fec9](https://github.com/powerfulyang/hooks/commit/da9fec9e25c783bc48f4cdab030f594c81378e5d))
- useImmer ([ca04bf2](https://github.com/powerfulyang/hooks/commit/ca04bf2ce9f826842e3822f6089809b08688c231))
- useLockScroll => lock body scroll ([42e4f3f](https://github.com/powerfulyang/hooks/commit/42e4f3fc02b394cb54d79ba746d5bee920dd501e))

### Bug Fixes

- **deps:** update dependency jotai to v1.6.3 ([b8ec56f](https://github.com/powerfulyang/hooks/commit/b8ec56fd34c65e790739d72d60ae6e105ccc2137))
- **deps:** update dependency jotai to v1.6.4 ([241db04](https://github.com/powerfulyang/hooks/commit/241db0404707db271d361f09415500a6f9d1cb7a))
- useLockScroll.ts # add lock state ([b734ea1](https://github.com/powerfulyang/hooks/commit/b734ea1c8bee6e7e172dd093bcfe509afca72674))
- useMountedRef.ts ([46737a4](https://github.com/powerfulyang/hooks/commit/46737a456219593c414e163419ea0cd67201613d))
- usePortal default container ([be4ca7b](https://github.com/powerfulyang/hooks/commit/be4ca7b871df5e48a9c149b47d56eadee4ded205))
- usePortal.ts ([da9fec9](https://github.com/powerfulyang/hooks/commit/da9fec9e25c783bc48f4cdab030f594c81378e5d))
- 以后都不会用 storybook 了 ([4c7ac4c](https://github.com/powerfulyang/hooks/commit/4c7ac4cb4b7cd46e9ae7d18a8db1003dfbc8c65e))
