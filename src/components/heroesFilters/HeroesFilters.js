import {useDispatch} from 'react-redux';
import { addHeroesFilter } from '../../actions';
import { useEffect, useState, useRef } from 'react';
import { useHttp } from '../../hooks/http.hook';
import classNames from 'classnames';


const HeroesFilters = () => {
    const {request} = useHttp()
    const dispatch = useDispatch();
    const [filters, setFilters] = useState();
    const refs = useRef([])
    useEffect(() => {
        request('http://localhost:3001/filters')
            .then(res => setFilters(res))
        // eslint-disable-next-line
    }, [])
    
    const setFilter = (e) => {
        const filter = e.target.getAttribute('data-filter');
        const filterUses = filter === 'all' ? false : true
        dispatch(addHeroesFilter(filter, filterUses))
    }
    const setActiveStyle = (e) => {
        refs.current.forEach(ref => ref.classList.remove('active'));
        refs.current[e.target.getAttribute('id')].classList.add('active')
    }
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filters ? filters.map((filter, i) => {
                        return <button ref={el => refs.current[i] = el}
                         onClick={(e) => {setFilter(e); setActiveStyle(e)}} data-filter={filter.name} key={i} id={i} className={classNames(filter.classNames)}>{filter.label}</button>
                    })
                    : <h4>Загрузка...</h4>}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;