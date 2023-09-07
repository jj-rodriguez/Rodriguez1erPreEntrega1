import './ItemListContainer';

const ItemListContainer = ({ greeting }) => {
    return (<>
        <div className='div-container'>
            <h1>{greeting}</h1>
        </div>

    </>

    );
}

export default ItemListContainer;