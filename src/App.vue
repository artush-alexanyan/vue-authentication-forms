<template>
  <div id="app">
    <div id="nav">
      <div class="container-fluid mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <router-link to="/home" tag="li" class="breadcrumb-item">
               <i class="fa fa-globe" aria-hidden="true"></i>
            </router-link>
            <router-link to="/about" tag="li" class="breadcrumb-item">
                <i class="fa fa-question" aria-hidden="true" id="info"></i>
            </router-link>
            <router-link to="/secret" tag="li" class="breadcrumb-item">
                <i class="fa fa-ban" aria-hidden="true" id="locked"></i>
            </router-link>
            <router-link to="*" tag="li" class="breadcrumb-item">
                <i class="fa fa-arrow-left mr-3" aria-hidden="true"></i>
                <strong class="strong">Ha ha, we are potected😄</strong>
            </router-link>            
          </ol>
        </nav>        
      </div>

    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#nav li.router-link-exact-active {
  color: green;
  cursor: pointer;
}
#nav li{
  cursor: pointer;
}
#locked{
  color: red;
}
#info{
  color: blue;
}
#currency{
  color: orange;
}
.strong{
  font-size: 10px;
}
</style>
