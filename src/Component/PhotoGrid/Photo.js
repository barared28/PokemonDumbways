import React from 'react';
import './Photo.css';


const Photo = () => {
    return (
        <div class='photo-grid-container'>
            <div class='photo-grid'>
                <div class='photo-grid-item first-item'>
                    <a href=""><img src='https://static.pokemonpets.com/images/monsters-images-800-800/1-Bulbasaur.png' /></a>
                    <button type="button" class="btn btn-success">Bulbasur</button>
                </div>
                <div class='photo-grid-item'>
                    <a href="" ><img src='https://i.pinimg.com/originals/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.png' /></a>
                    <button type="button" class="btn btn-success">Pikachu</button>
                </div>
                <div class='photo-grid-item'>
                    <a href=""><img src='https://img.pokemondb.net/artwork/large/rayquaza.jpg' /></a>
                    <button type="button" class="btn btn-success">Rayquaza</button>
                </div>

            </div>
        </div>
    )
}

export default Photo;






