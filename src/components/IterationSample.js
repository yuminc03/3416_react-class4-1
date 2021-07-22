import React, { useState } from 'react';

const IterationSample = () => {//데이터 추가 기능
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    //새로운 항목 추가할 때 사용할 ID

    const onChange = e => setInputText(e.target.value);

		const onClick = () => {
			const nextNames = names.concat({
				id: nextId, //nextID 값을 id로 설정
				text: inputText
			});
			setNextId(nextId + 1);
			setNames(nextNames);
			setInputText('');
		};

		const onRemove = id => {
			const nextNames = names.filter(name => name.id !== id);
			setNames(nextNames);
		};

    const namesList = names.map(name =>(
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
					{name.text}
				</li>
		));//key값을 index대신 name.id값 사용
		
    return(
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
};

// const IterationSample = () => {
//     const {names, setNames} = useState([
//         {id: 1, text: '눈사람'},
//         {id: 2, text: '얼음'},
//         {id: 3, text: '눈'},
//         {id: 4, text: '바람'}
//     ]);
//     const [inputText, setInputText] = useState('');
//     const [nextId, setNextId] = useState(5);
//     //새로운 항목 추가할 때 사용할 ID

//     const namesList = names.map(name =>
//         <li key={name.id}>{names.text}</li>);
//     return <ul>{namesList}</ul>;
// };

// const IterationSample = () => {
//     const names = ['눈사람', '얼음', '눈', '바람'];
//     const nameList = names.map(name => <li>{name}</li>);
//     return <ul>{nameList}</ul>
// };

// const IterationSample = () => {
//     return(
//         <ul>
//             <li>눈사람</li>
//             <li>얼음</li>
//             <li>눈</li>
//             <li>바람</li>
//         </ul>
//     );
// };

export default IterationSample;