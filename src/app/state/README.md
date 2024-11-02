# State Management

The State Management in this application is a self-brewn solution providing a flat state object whose properties can be accessed and modified either by using signals or by accessor functions.

# State Slices

| Class           | Storage          | Trigger                               |
| --------------- | ---------------- | ------------------------------------- |
| PersistentState | localStorage     | On every state change                 |
| SessionState    | sessionStorage   | On every state change                 |
| RouterState     | URL query params | Synchronized with URL                 |
| DerivedState    | None             | On every change of dependent property |
| GlobalState     | None             |                                       |

# API

| Class           | get | set         | signal         |
| --------------- | --- | ----------- | -------------- |
| PersistentState | yes | yes         | WritableSignal |
| SessionState    | yes | yes         | WritableSignal |
| RouterState     | yes | yes         | WritableSignal |
| DerivedState    | yes | no          | Signal         |
| GlobalState     | yes | (forwarded) | (forwarded)    |

# Information

## [`PersistentState`](./persistent-state.ts)

The `PersistentState` class is a singleton class that persists a slice of the state to the [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). The state is hydrated from the local storage on application start and is persisted to the local storage on every state change.

## [`SessionState`](./session-state.ts)

The `SessionState` class is a singleton class that holds the session state of the application which is also persisted to the [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage). The state is hydrated from the session storage on application start and is persisted on every state change.

## [`RouterState`](./router-state.ts)

The `RouterState` class is a singleton class that holds a slice of the state as routing query parameters. The state is synchronized with the current URL query parameters.

## [`DerivedState`](./derived-state.ts)

The `DerivedState` class is a singleton class that holds derived fields from other state slices. The derived fields are computed on every state change and are neither persisted nor editable.

## [`GlobalState`](./global-state.ts)

The `GlobalState` class is a singleton class that combines all state slices into a single state object. All artifacts using state management should use the `GlobalState` class to access and modify the state. This is also enforced by an eslint rule.

# Extending the State

If a new state property is required it should be added to the state slice where it should be persisted. Add the initial value and the type to the `initialState` object in the respective state slice.

If the property is derived from other properties it has to be added to the `DerivedState` instead. Add the property and type to the state type and provide a computed signal in the initializer method.
