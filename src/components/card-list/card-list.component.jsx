import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (//deconstruct right inside of the parameter instead of props
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card monster={monster} />
        })}
    </div>
);

export default CardList;

/*
class CardList extends Component {
    render() { 
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    const { name, email, id } = monster;
                    return (
                        <Card monster={monster} />
                )})}
            </div>
        );
    }
}

export default CardList;
*/