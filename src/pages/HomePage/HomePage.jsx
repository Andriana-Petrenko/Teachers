import { Helmet } from 'react-helmet-async'
import MainInfo from '../../components/MainInfo/MainInfo'
import Tutors from '../../components/Tutors/Tutors'
const HomePage = () => {
    return (
      <>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <MainInfo />
        <Tutors/>
      </>
  )
}

export default HomePage