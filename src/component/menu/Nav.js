import '../../styles/nav.css'
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import wLogo from "../../Pics/white-logo.png";
import NavModules from './NavModules'
import { auth, db } from '../../index'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import {  SET_USER } from '../../reducer/reducer'
import { selectCategories, selectUser } from '../../selectors/fierbase';
import bagIcon from '../../Pics/bag.png'
function Nav(props) {
  const categories = useSelector(selectCategories)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  // const {categories} = props
  const [displayNone, setDisplay] = useState(false)
  const [email, setEmail] = useState('');
  const [uid, setUid] = useState('');
  const [userImg, setImg] = useState('');
  const [bag, setBag] = useState([])
  // const bagLength = user.data.bag.length

  const handleToggle = (e) => {
    setDisplay(displayNone ? false : true)
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email)
        setUid(user.uid)
        db.collection("users").doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            dispatch({
              type: SET_USER,
              payload: {
                data: doc.data(),
                uid: user.uid
              }
            })
            setImg(doc.data().image)
          }
        })
      }
    });
  }, [])
  let bagItemIcon = '';
  if (user.data) {
    (
      bagItemIcon = <div className='div-bag-icon' >
        <span className='bag-count'>{(bag ? bag : 0)}</span>
        <Link className='navbar-menu-a' to="/bag">
          <img src={bagIcon} />
        </Link>
      </div>
    )
  }
  return (
    <div className='page-navigation'>
      <div className='page-container'>
        <div className='navbar-mobile'></div>
        <div className='navbar-desktop'>
          <Link className='navbar-desktop-a' to="/"><img alt='img' src={wLogo} /></Link>
          <div className='navbar-menu'>
            <Link className='navbar-menu-a' to="/new">New</Link>
            {
              categories.map((category, i) => (
                <Link
                  // onClick={() => { dispatch({ type: SELECTED_CATEGORY, payload: category }) }}
                  className='navbar-menu-a'
                  key={i}
                  to={`/categories/${category.categoryId}`}>
                  {category.type}</Link>
              ))
            }
            <Link className='navbar-menu-a' to="/brands">Brands</Link>
          </div>
          <div className='profile-items'>
            {bagItemIcon}

            <span onClick={handleToggle} id='profile-items' className='profile-items-span'>{(email ? email : 'My account')} </span>

          </div>
        </div>
        <NavModules changeProfileDisplay={displayNone} handleToggle={handleToggle} userImg={userImg} email={email} uid={uid} />
      </div>


    </div>

  )
}
export default Nav
