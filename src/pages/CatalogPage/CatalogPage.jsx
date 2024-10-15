import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import { useDispatch, useSelector} from "react-redux";
import TruckList from "../../components/TruckList/TruckList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css"
import { selectFilteredTrucks } from "../../redux/filters/selectors";
import { isLoading } from "../../redux/truck/selectors";
import teachers from "../../teacher.json"
import TeachersList from "../../components/TeachersList/TeachersList";

const CatalogPage = () => {
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const loading = useSelector(isLoading); 
  const [visibleCount, setVisibleCount] = useState(4);

useEffect(() => {
    document.body.style.backgroundColor = 'var(--bckgr-main)';
    return () => {
      document.body.style.backgroundColor = 'var(--white)';
    };
}, []);
  
  
  useEffect(() => {
    setVisibleCount(4); 
  }, [filteredTrucks]);
  
  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };
  
  return (
    <>
        <Helmet>
            <title>Catalog Page</title>
        </Helmet>
        <section>
            {/* <Filters/> */}
        <TeachersList teachers={teachers.slice(0, visibleCount)} />
        </section>
      {!loading && visibleCount < teachers.length && (
        <button className={css.search_button} type="button" onClick={onClickButton}>
          Load more
        </button>
      )}
        
    </>
  )
}

export default CatalogPage