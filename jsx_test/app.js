// //first
// ReactDOM.render(<h1> titlt </h1>, document.getElementById('test'))
// //TO JS
// ReactDOM.render(React.createElement('h1', null, 'title'), document.getElementById('test'));



// //second
// ReactDOM.render(
//   <ul>
//     <li>xxxxxxx</li>
//   </ul>,
//   document.getElementById('test')
// )
// //TO JS
// ReactDOM.render(
//    React.createElement('ul', null, React.createElement('li', null, 'xxxxxxxx')),
//    document.getElementById('test')
// );



//third
// const List = React.createClass({
//   render(){
//     return <li>
//       ReactDOM
//     </li>
//   }
// });
// ReactDOM.render(
//   <ul>
//     <List></List>
//   </ul>,
//   document.getElementById('test')
// )
//to js
// ReactDOM.render(
//   React.createElement('ul', null, React.createElement(List)), document.getElementById('test')
// )



// // forth
// const List = React.createClass({
//   render(){
//     return <li>
//       ReactDOM
//     </li>
//   }
// });
//
// ReactDOM.render(
//   <ul style={ {backgroundColor:'red'} }>
//     <List></List>
//   </ul>,
//   document.getElementById('test')
// )
// // to js
// ReactDOM.render(
//   React.createElement('ul', {style:{backgroundColor:'red'}}, React.createElement(List)), document.getElementById('test')
// )



// // fifth:三元表达式
// const List = React.createClass({
//   render(){
//     return <li>
//       ReactDOM
//     </li>
//   }
// });
// const bool = false;
// // ReactDOM.render(
// //   <ul style={ {backgroundColor: 'red'} }>
// //     <List></List>
// //     { bool? <List></List> : <h1>hahaha</h1>}
// //   </ul>,
// //   document.getElementById('test')
// // )
// //to js
// ReactDOM.render(
//   React.createElement('ul', {style: {backgroundColor:'red'}}, [React.createElement(List), bool ? React.createElement(List) : React.createElement('h1', null, 'hahaha')]), document.getElementById('test')
// )



// // sixth 根节点翻译
// // const List = React.createClass({
// //   render(){
// //     return <div>
// //       <span>span1</span>
// //       <span>span2</span>
// //       <span>span3</span>
// //       <span>span3</span>
// //       <span>span4</span>
// //     </div>
// //   }
// // });
// //to js
// const List = React.createClass({
//     render(){
//       return React.createElement('div', null,
//           React.createElement('span', null, 'span1'),
//           React.createElement('span', null, 'span2'),
//           React.createElement('span', null, 'span3'),
//           React.createElement('span', null, 'span4')
//       )
//     }
// });
//
// const bool = false;
// ReactDOM.render(
//   <ul style={ {backgroundColor: 'red'} }>
//     <List></List>
//   </ul>,
//   document.getElementById('test')
// )
