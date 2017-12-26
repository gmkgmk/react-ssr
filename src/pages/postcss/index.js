import React, { Component } from 'react'
import classNames from 'classnames'

import style from './style/index.p.css'
import './style/postcss-global.p.css'

const Hello = () => {
    return (
        <div>
            <h1>测试postcss</h1>
            {/*`${style.title1} bg-gray`*/}
            <div className={classNames(style.title1, 'bg-gray', 'text-blue')}>666666</div>
            <div className={style.title2}>888</div>
            <div className={style.titleTest3}>888</div>
        </div>
    )
}

export default Hello;