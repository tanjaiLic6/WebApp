const rootElement= document.getElementById('root');

const view= React.createElement(
    'ul',
     {className:'ul-list'},
    React.createElement('li',{className:'apple'},'Apples'),
    React.createElement('li',null,'Banana'),
    React.createElement('li',null,'Lemon'),
    React.createElement('li',null,'Orange')


);

ReactDOM.render(
    view,
    rootElement
);


