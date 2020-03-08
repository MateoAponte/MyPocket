<template>
    <div class="calculator-container" id="calculator">
        <div class="calculator-controls">
            <font-awesome-icon icon="arrows-alt" id="calculatorMove"/>
            <font-awesome-icon icon="times-circle" id="calculatorClose" @click="closeCalculator()" />
        </div>
        <div class="calculator-display">
            <div class="calculator-display__acum">
                255 + 355 - 45
            </div>
            <div class="calculator-display__total">
                1294
            </div>
        </div>
        <div class="calculator-options">
            <button class="calculator__buttons calculator__buttons--background">CE</button>
            <button class="calculator__buttons calculator__buttons--background">C</button>
            <button class="calculator__buttons calculator__buttons--background">←</button>
            <button class="calculator__buttons calculator__buttons--background">/</button>
            <button class="calculator__buttons">7</button>
            <button class="calculator__buttons">8</button>
            <button class="calculator__buttons">9</button>
            <button class="calculator__buttons calculator__buttons--background">*</button>
            <button class="calculator__buttons">4</button>
            <button class="calculator__buttons">5</button>
            <button class="calculator__buttons">6</button>
            <button class="calculator__buttons calculator__buttons--background">+</button>
            <button class="calculator__buttons">1</button>
            <button class="calculator__buttons">2</button>
            <button class="calculator__buttons">3</button>
            <button class="calculator__buttons calculator__buttons--background">-</button>
            <button class="calculator__buttons calculator__buttons--big">0</button>
            <button class="calculator__buttons">.</button>
            <button class="calculator__buttons calculator__buttons--background">=</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: "calculator",
        mounted(){
            dragElement(document.querySelector("#calculator"));
            function dragElement(elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                if (document.querySelector(`#${elmnt.id}Move`)) {
                    document.querySelector(`#${elmnt.id}Move`).onmousedown = dragMouseDown;
                } else {
                    elmnt.onmousedown = dragMouseDown;
                }

                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }

                function closeDragElement() {
                    /* stop moving when mouse button is released:*/
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
        },
        methods: {
            ...mapActions('common', [
                "updateCalculator"
            ]),
            closeCalculator(){
                this.updateCalculator(false);
            }
        }
    }
</script>