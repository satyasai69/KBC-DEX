# KBC-DEX Frontend

<p align="center">

This project contains the main features of the DEX application.

If you want to contribute, please refer to the [contributing guidelines](./CONTRIBUTING.md) of this project.

## `apps/web`

<details>
<summary>
How to start
</summary>

```sh
yarn
```

start the development server

```sh
yarn dev
```

build with production mode

```sh
yarn build

# start the application after build
yarn start
```

</details>

## Packages

| Package                                  | Description                                                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [sdk](/packages/swap-sdk)                | An SDK for building applications on top of Pancakeswap                                                      |
| SDK                                      |
| [swap-sdk-core](/packages/swap-sdk-core) | Swap SDK Shared code                                                                                        |
| [wagmi](/packages/wagmi)                 | Extension for [wagmi](https://github.com/wagmi-dev/wagmi), including bsc chain and binance wallet connector |
