# Vanilla Redux

Learning Vanilla-Redux and React-React

Redux는 data를 관리하는데 도와주는 역활을 하기 위해 만들어 졌다.

## reducer
reducer은 함수이다. 그리고 데이터를 수정하는 곳이다.

```javascript
const countModifier = (state) =>{
    ....modiy state
    return state;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());

실행 : 1
```

## State Mutation
새로운 state를 create하고 그 새로운 state를 return한다.
\