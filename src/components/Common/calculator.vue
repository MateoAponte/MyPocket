<template>
    <div class="calculator-container" id="calculator">
        <div class="calculator-controls">
            <font-awesome-icon icon="arrows-alt" id="calculatorMove"/>
            <font-awesome-icon icon="times-circle" id="calculatorClose" @click="closeCalculator()" />
        </div>
        <div class="calculator-display">
            <div class="calculator-display__acum">
                {{amount}}
            </div>
            <div class="calculator-display__total">
                {{display}}
            </div>
        </div>
        <div class="calculator-options">
            <button class="calculator__buttons calculator__buttons--background" @click="clearAll()">CE</button>
            <button class="calculator__buttons calculator__buttons--background" @click="clearDisplay()">C</button>
            <button class="calculator__buttons calculator__buttons--background" @click="clearStep()">←</button>
            <button class="calculator__buttons calculator__buttons--background" @click="executeOperation('/')">/</button>
            <button class="calculator__buttons" @click="keyPress(7)">7</button>
            <button class="calculator__buttons" @click="keyPress(8)">8</button>
            <button class="calculator__buttons" @click="keyPress(9)">9</button>
            <button class="calculator__buttons calculator__buttons--background" @click="executeOperation('*')">*</button>
            <button class="calculator__buttons" @click="keyPress(4)">4</button>
            <button class="calculator__buttons" @click="keyPress(5)">5</button>
            <button class="calculator__buttons" @click="keyPress(6)">6</button>
            <button class="calculator__buttons calculator__buttons--background" @click="executeOperation('+')">+</button>
            <button class="calculator__buttons" @click="keyPress(1)">1</button>
            <button class="calculator__buttons" @click="keyPress(2)">2</button>
            <button class="calculator__buttons" @click="keyPress(3)">3</button>
            <button class="calculator__buttons calculator__buttons--background" @click="executeOperation('-')">-</button>
            <button class="calculator__buttons calculator__buttons--big" @click="keyPress(0)">0</button>
            <button class="calculator__buttons" @click="keyPress('.')">.</button>
            <button class="calculator__buttons calculator__buttons--background" @click="keyTotal()">=</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        name: "calculator",
        data: function(){
            return {
                amount: "",
                acum: 0,
                display: 0,
                step: 0,
                getTotal: false 
            }
        },
        methods: {
            ...mapActions('common', [
                "updateCalculator"
            ]),
            closeCalculator(){
                this.updateCalculator(false);
            },
            keyPress(val){
                if(this.getTotal === true){
                    this.amount = '';
                    this.acum = 0;
                    this.getTotal = false;
                    this.display = val.toString();
                }
                if(val === '.'){
                    if(!this.display.toString().match(/\./g)){
                        this.display += val;
                        this.step++;
                    }
                } else {
                    if(this.step === 0){
                        this.display = val.toString();
                        this.step++;
                    } else {
                        this.display += val.toString();
                        this.step++;
                    }
                }
            },
            executeOperation(operator){
                let mathExp = /(\*|\+|\-|\/)/g;
                this.getTotal === true ? this.amount += ` ${operator} ` : this.amount += this.display + ` ${operator} `;
                this.getTotal === true && (this.getTotal = false);
                // this.step === 1 ? (this.amount += this.display + ` ${operator} `) : (this.amount += ` ${operator} `);
                let operation = '+';
                this.amount.match(mathExp).length > 1 
                            ? operation = this.amount.match(mathExp)[this.amount.match(mathExp).length - 2]
                            : operation = this.amount.match(mathExp)[this.amount.match(mathExp).length - 1];
                if(this.step === 1){
                    switch(operation){
                        case '+':
                            this.acum = parseFloat(this.display) + parseFloat(this.acum);
                        break;
                        case '-':
                            if(this.acum <= 0 ){
                                this.acum = parseFloat(this.display);
                            } else {
                                this.acum = parseFloat(this.acum) - parseFloat(this.display);
                            }
                        break;
                        case '*':
                            if(this.acum <= 0 ){
                                this.acum = parseFloat(this.display);
                            } else {
                                this.acum = parseFloat(this.acum) * parseFloat(this.display);
                            }
                        break;
                        case '/':
                            this.acum =  parseFloat(this.acum) / (this.display == 0 ? 1 : parseFloat(this.display));
                        break;
                    }
                }
                this.display = this.acum;
                this.step = 0;
            },
            keyTotal(){
                let mathExp = /(\*|\+|\-|\/)/g;
                let operation = this.amount.match(mathExp)[this.amount.match(mathExp).length - 1]
                switch(operation){
                    case '+':
                        this.acum = parseFloat(this.display) + parseFloat(this.acum);
                    break;
                    case '-':
                        this.acum = parseFloat(this.acum) - parseFloat(this.display);
                    break;
                    case '*':
                        this.acum = parseFloat(this.display) * parseFloat(this.acum);
                    break;
                    case '/':
                        this.acum =  parseFloat(this.acum) / (this.display == 0 ? 1 : parseFloat(this.display));
                    break;
                }
                if(this.step === 0){
                    let amount = _.cloneDeep(this.amount)
                    amount = amount.split(mathExp);
                    amount[amount.length - 1] = this.display;
                    this.acum = parseFloat(amount[amount.length - 1]) + parseFloat(amount[amount.length - 3]);
                    this.amount = amount.join("");
                } else {
                    this.amount += this.display;
                }
                this.getTotal = true;
                this.display = this.acum;
                this.step = 0;
            },
            clearAll(){
                this.display = 0;
                this.acum = 0;
                this.amount = '';
                this.step = 0;
            },
            clearDisplay(){
                this.display = 0;
                this.step = 0;
            },
            clearStep(){
                if(this.display.length > 1){
                    this.display = this.display.toString().split("");
                    this.display.pop();
                    this.display = this.display.join("");
                } else {
                    this.display = 0;
                    this.step = 0;
                }
            }
        },
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
        }
    }
</script>