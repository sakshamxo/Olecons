import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
const Header = () => {
  const {i18n , t} = useTranslation(["common"])
  useEffect(() => {
   if(localStorage.getItem("i18nextLng")?.length > 2){
    i18next.changeLanguage("en");
   }
  }, [])
  
  const handleLanguage = (e)=>{
    i18n.changeLanguage(e.target.value)
   
  }

  return (
<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
       
        
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
            <h2 className='text-white' >{t("Hello!")}</h2>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">

            <Link to="/" className=" text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700" aria-current="page">{t("Home")}</Link>
            <Link to="/about" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{t("About")}</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
        
         
        </button>


        <div className="relative ml-3">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Language")}</label>
<select id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={localStorage.getItem("i18nextLng")} onChange={handleLanguage} >
  <option value="en" selected="en" >English</option>
  <option value="hi">Hindi</option>
  <option value="es">Spanish</option>
  <option value="fr">French</option>
</select>

        </div>
      </div>
    </div>
  </div>


  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      
      <Link to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">{t("Home")}</Link>
      <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{t("About")}</Link>

    </div>
  </div>
</nav>

 
  )
}

export default Header