import Item from "./../Item";
import Breadcrum from "./../Breadcrum";
import "./style.scss";

const ItemList = ({ data, category, search }) => {
  return (
    <div className="item-list-wrapper">
      {data && (
        <Breadcrum
          category={category.name}
          search={search.slice(search.indexOf("=") + 1, search.length)}
        />
      )}
      <section className="item-list-container">
        {data ? (
          data.map(item => {
            return <Item data={item} key={item.id} />;
          })
        ) : (
          <span>No hay resultados para tu búsqueda</span>
        )}
      </section>
    </div>
  );
};

export default ItemList;
