import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { heroesAdd } from '../../actions';
import {useHttp} from '../../hooks/http.hook'

const HeroesAddForm = () => {
    const [heroName, setHeroName] = useState('');
    const [heroDescription, setHeroDescription] = useState('');
    const [heroElement, setHeroElement] = useState('');
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onSubmitForm = (e) => {
        e.preventDefault();
        const newHero = {
            id: uuid(),
            name: heroName,
            description: heroDescription,
            element: heroElement
        }
        
        dispatch(heroesAdd(newHero));
        request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero))
        setHeroName('')
        setHeroDescription('');
        setHeroElement('')
        
    }
    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name"
                    value={heroName}
                    placeholder="Как меня зовут?"
                    onChange={(e) => setHeroName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="description" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={heroDescription}
                    onChange={e => setHeroDescription(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={heroElement}
                    onChange={e => setHeroElement(e.target.value)}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;