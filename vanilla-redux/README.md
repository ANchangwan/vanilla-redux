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
## action
action은 redux에서 function을 부를 때 쓰는 두번째 parameter, 혹은 argument이다.

## dispatch
type을 통해서 store에 message를 보내서 데이터를 변경한다. 그 때 사용하는게 dispatch이다. dispatch는 데이터를 변경하고자
할때 사용한다.

## subscribe
redux에 변화가 감지되면 실행된다.


## State Mutation
새로운 state를 create하고 그 새로운 state를 return한다.
