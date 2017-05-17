//Item
const Item = React.createClass({
  edit(){
    this.props.onEdit(this.props.id, this.props.value);
  },
  remove(){
    this.props.onRemove(this.props.id);
  },
  render(){
    return (<li className="list-group-item">{this.props.value}
      <a onClick={this.remove} className="glyphicon glyphicon-remove right"></a>
      <a onClick={this.edit} className="glyphicon glyphicon-edit right"></a>
    </li>)
  }
});
//ItemEditor
const ItemEditor = React.createClass({

  getInitialState(){
    return({
      value: ''
    });
  },
  handleChange(event){
    this.state.value = event.target.value;
    this.forceUpdate();
  },
  save(){
    this.props.onSave(this.props.id, this.state.value);
    this.forceUpdate();
  },
  remove(){
    this.props.onRemove(this.props.id);
  },
  render(){
    return (<li className="list-group-item">
     { this.props.id }
     <input onChange={this.handleChange} value={this.state.value}></input>
     <a onClick={this.save} className="glyphicon glyphicon-saved"></a>
     <a onClick={this.remove} className="glyphicon glyphicon-remove"></a>
   </li>)
  }
});
//List
const List = React.createClass({

  getInitialState(){
    return({
      key:0,
      list:new Map(),
      editList:new Map()
    });
  },
  add(){
    const key = ++this.state.key
    this.state.editList.set(key, '');
    this.forceUpdate();
  },
  saveItem(id, value){
    this.state.editList.delete(id);
    this.state.list.set(id, value);
    this.forceUpdate();
  },
  removeItemEditor(id){
    this.state.editList.delete(id);
    this.forceUpdate();
  },
  edit(id, value){
    this.state.list.delete(id);
    this.state.editList.set(id, value);
    this.forceUpdate();
  },
  removeList(id){
    this.state.list.delete(id);
    this.forceUpdate();
  },
  render(){
    const itemDom = [];
    const editorDom = [];

    for(let entity of this.state.list){
      itemDom.push(<Item id={entity[0]} onRemove={this.removeList} onEdit={this.edit} key={entity[0]} value={entity[1]} />);
    }

    for(let entity of this.state.editList){
      editorDom.push(<ItemEditor id={entity[0]} onSave={this.saveItem} key={entity[0]} onRemove={this.removeItemEditor} value={entity[1]} />);
    }
    return (<div>
      <button onClick={this.add} className="btn default">Add+</button>
      <ul className="list-group">
        {itemDom}
        {editorDom}
      </ul>
    </div>)
  }
});

ReactDOM.render(
  <List/>,
  document.getElementById('test')
)
