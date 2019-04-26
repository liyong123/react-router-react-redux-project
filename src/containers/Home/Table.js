import React, { Component } from 'react';
import { Button } from 'antd'

//函数式组件
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Age</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
};
//类组件
class TableBody extends Component {
     render () {
         const { characterData,removeCharacter } = this.props;
         return (
             <tbody>
             {
                 characterData.map((item,index)=>{
                     return (
                         <tr key={Math.random()+index}>
                             <td>{item.age}</td>
                             <td>{item.job}</td>
                             <td><Button type='primary' onClick={()=>{removeCharacter(index)}}>delete</Button></td>
                         </tr>
                     )
                 })
             }
             </tbody>
         )
     }
}
//函数式组件
/*const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
};*/

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;