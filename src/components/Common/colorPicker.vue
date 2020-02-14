<template>
    <div class="color-picker"></div>
</template>

<script>
import '@simonwep/pickr/dist/themes/classic.min.css'; 
import Pickr from '@simonwep/pickr';

export default {
    name: "color-picker",
    props: {
        value:{
            type: String,
            default: "#000000"
        },
        swatches: {
            type: Array,
            default: () => {
                return []
            }
        },
        interaction: {
            type: Object,
            default: () => {
                return {
                    input: true,
                    clear: true,
                    save: true
                }
            }
        },
        preview: {
            type: Boolean,
            default: true
        },
        hue: {
            type: Boolean,
            default: true
        },
        onSave: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            picker: {},
        }
    },
    watch: {
        value(newVal){
            this.setValue(newVal);
        }
    },
    computed: {
        traduceColorHexa(){
            return this.picker.getColor().toHEXA().toString();
        }
    },
    methods: {
        $init(){
            let _self = this;
            this.picker = Pickr.create({
                el: _self.$el,
                theme: 'classic',
                default: _self.value ? _self.value : "#ffffff",

                swatches: _self.swatches,

                components: {
                    preview: _self.preview,
                    hue: _self.hue,
                    // Input / output Options
                    interaction: _self.interaction
                },

                strings: {
                    save: 'Guardar',  // Default for save button
                    clear: 'Limpiar', // Default for clear button
                    cancel: 'Cancelar' // Default for cancel button
                }
            });

            if(!this.onSave){                
                this.picker.on('change', (value, instance) => {
                    this.$emit("input", this.traduceColorHexa)
                })
            }
            this.picker.on('init', (value, instance) => {
                this.$emit("input", this.traduceColorHexa)
            })

            this.picker.on('save', (color, instance) => {
                this.$emit("input", this.traduceColorHexa)
            })
            
            this.picker.on('clear', instance => {
                this.$emit("input", "#000000")
            })
        },
        setValue(value){
            this.picker.setColor(value);
        },
        getValue(){
            this.traduceColorHexa;
        },
    },
    mounted(){
        this.$init();
    },
}
</script>