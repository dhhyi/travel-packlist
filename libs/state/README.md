# State Management

The State Management in this application is a self-brew solution providing a state object whose properties can be accessed and modified using signals or supplied methods.
The state is build by a [`StateBuilder`](./src/lib/state-builder.ts) class that combines all state slices into a single state object.

## Structure

### `lib/persistence`

This folder contains functions to create signals that persist state.
Available are:

- [`createRouterSignalState`](./src/lib/persistence/router-signal.ts)
- [`createSessionStorageSignalState`](./src/lib/persistence/storage-signal.ts)
- [`createLocalStorageSignalState`](./src/lib/persistence/storage-signal.ts)

### `lib/slices`

This folder contains the state slices that supply parts of the global state object.

### [`GLOBAL_STATE`](./src/lib/global-state.ts)

The `GLOBAL_STATE` injection key that combines all state slices into a single state object.
All artifacts using state management should inject this token to access and modify the state via its signals.

### [`StateBuilder`](./src/lib/state-builder.ts)

The `StateBuilder` class is used to construct the state object from the state slices.

## Extending the State

To extend the state, add a new signal to one of the state slices or create a new slice and register it in the global state.
