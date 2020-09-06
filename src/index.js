import './styles.css'
import thunk from "redux-thunk"
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./redux/rootReducer";
import {asynkIncrement, changeTheme, decrement, increment} from "./redux/actions";

const $counter = document.getElementById('counter')
const $add = document.getElementById('add')
const $sub = document.getElementById('sub')
const $async = document.getElementById('async')
const $theme = document.getElementById('theme')


function reduxLogger(state) {
    return function (reducer) {
        return function (action) {
            console.log('PrevState', state.getState())
            console.log('Action', action)
            return reducer(action)
        }
    }
}

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk, reduxLogger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


store.subscribe(() => {
    $counter.innerText = store.getState().counter;

    //document.body.classList.toggle(store.getState().theme.value);
    document.body.className = store.getState().theme.value;

    [$add, $counter, $sub, $async, $theme].forEach(btn => btn.disabled = store.getState().theme.disable)

    console.log(store.getState().theme.disable)

})
store.dispatch({type: ''})

$add.addEventListener('click', () => {
    store.dispatch(increment())
})


$sub.addEventListener('click', () => {
    store.dispatch(decrement())
})


$async.addEventListener('click', () => {
    store.dispatch(asynkIncrement())
})


$theme.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
    store.dispatch(changeTheme(newTheme))
})
