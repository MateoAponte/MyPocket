<template>
    <div class="toggle-button-cover">
        <div class="button-cover">
            <div class="button r toggle-button">
                <input type="checkbox" class="checkbox" :checked="toggle" v-model="toggle" />
                <div class="knobs"></div>
                <div class="layer"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'toggleButton',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        id: {
            type: String
        }
    },
    data: function(){
        return {
            toggle: false
        }
    },  
    watch: {
        toggle(newVal){
            this.$emit('input', newVal);
        }
    }
}
</script>