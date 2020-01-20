import React, { Component } from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <div class="menu-container">
                <div class='menu'>
                    <div class='inventory'><b>PokeDumb Find</b></div>
                    <div class='links'>
                        <div class='signup'>
                            <button type="button"  class="btn btn-info">Add
                            Pokemon</button>
                        </div>
                        <div class='login'>
                            <button type="button"  class="btn btn-info">Add
                            Elements</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;