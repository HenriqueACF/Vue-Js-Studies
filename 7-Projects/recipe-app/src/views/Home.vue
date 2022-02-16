<template>
  <div class="home">
    <h1>My Recipes</h1>
    <button>Add new recipes</button>
    <div class="recipes">

    </div>

    <div class="add-recipes-popup">
      <div class="popup-content">
        <h2>Add new recipes</h2>

        <form @submit.prevent="">
          <div class="group">
            <label>Ttile</label>
            <input type="text">
          </div>

          <div class="group">
            <label>Description</label>
            <textarea></textarea>
          </div>

          <div class="group">
            <label>Ingredients</label>
            <div class="ingredients">
              <input type="text">
            </div>
            <button type="button">Add Ingredient</button>
          </div>

          <div class="group">
            <label>Methods</label>
            <div class="methods">
              <textarea></textarea>
            </div>
            <button type="button">Add Step</button>
          </div>
          
          <button type="submit">Add Recipe</button>
          <button type="button">Close</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
.home {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 3rem;
  margin-bottom: 32px;
}
.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.recipes .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #081c33;
}
.recipes .card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.recipes .card p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.add-recipe-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-recipe-popup .popup-content {
  background-color: #081c33;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 768px;
}
.popup-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.popup-content .group {
  margin-bottom: 1rem;
}
.popup-content .group label {
  display: block;
  margin-bottom: 0.5rem;
}
.popup-content .group input,
.popup-content .group textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.popup-content .group textarea {
  height: 100px;
  resize: none;
}
.popup-content button[type="submit"] {
  margin-right: 1rem;
}
</style>
