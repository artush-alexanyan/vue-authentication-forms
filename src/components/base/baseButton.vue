<template>
    <div class="base-button">
         <button type="submit"
           @click="onClick" 
            class="btn btn-primary btn-block" 
            >
          <slot></slot>
        </button>        
    </div>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        onClick: {
            type: Function,
            requred: true            
        }
    }
}
</script>