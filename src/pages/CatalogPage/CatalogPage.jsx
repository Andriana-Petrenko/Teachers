import { useEffect} from "react";
import { Helmet } from "react-helmet-async"
import { useDispatch, useSelector} from "react-redux";
import css from "./CatalogPage.module.css"
import TeachersList from "../../components/TeachersList/TeachersList";
import { isLoading, selectLastKey, selectTeachers} from "../../redux/teachers/selectors";
import { fetchTeachers } from "../../redux/teachers/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const lastKey = useSelector(selectLastKey);
  const loading = useSelector(isLoading);
  // const teachers = useSelector(selectTeachers);

useEffect(() => {
    document.body.style.backgroundColor = 'var(--bckgr-main)';
    return () => {
    document.body.style.backgroundColor = 'var(--white)';
    };
}, []);
  
  
 useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);
  
  const onClickButton = () => {
   if (lastKey) {
      dispatch(fetchTeachers({ lastKey }));
    }
  };
  
  return (
    <>
        <Helmet>
            <title>Catalog Page</title>
        </Helmet>
        <section>
        <TeachersList />
        </section>
      {lastKey && !loading &&  (
        <button className={css.search_button} type="button" onClick={onClickButton}>
          Load more
        </button>
      )}
        
    </>
  )
}

export default CatalogPage