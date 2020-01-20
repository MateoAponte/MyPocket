<template>
    <div class="container-item__row">
        <div class="m-card__section container-item__column">
            <div class="m-card__section container-item__column">
                <div class="container-item__row">
                    <img class="m-img" src="@Assets/img/MaquinaryPocket.png" alt="">
                </div>
            </div>
        </div>
        <div class="m-card__section container-item__column">
            <div class="container-item__row special-inputs">
                <div class="container-item__column">
                    <label class="m-label">
                        Info:
                    </label>
                    <input type="radio" name="size" id="info_1" value="Trabajador" />
                    <label class="special-label" for="info_1">
                        <span class="m-value-bolder">Independiente</span>
                        <font-awesome-icon icon="tools" />
                    </label>
                </div>
                <div class="container-item__column">
                    <input type="radio" name="size" id="info_2" value="Estudiante" />
                    <label class="special-label" for="info_2">
                        <span class="m-value-bolder">Estudiante</span>
                        <font-awesome-icon icon="book" />
                    </label>
                </div>
                <div class="container-item__column">
                    <input type="radio" name="size" id="info_3" value="Independiente" />
                    <label class="special-label" for="info_3">
                        <span class="m-value-bolder">Independiente</span>
                        <font-awesome-icon icon="user" />
                    </label>
                </div>
            </div>
            <div class="container-item__row">
                <div class="container-item__column">
                    <label class="m-label">
                        Nombre:
                    </label>
                    <input type="text" class="custom-form" placeholder="Ingrese su nombre" />
                </div>
                <div class="container-item__column">
                    <label class="m-label">
                        Apellido:
                    </label>
                    <input type="text" class="custom-form" placeholder="Ingrese su apellido" />
                </div>
            </div>
            <div class="container-item__row">
                <div class="container-item__column--mini">
                    <label class="m-label">
                        Interes:
                    </label>
                    <input type="text" class="custom-form" placeholder="0%" />
                </div>
                <div class="container-item__column">
                    <label class="m-label">
                        Presupuesto:
                    </label>
                    <input type="text" class="custom-form" placeholder="Ingrese su presupuesto" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "upperSection"
    }
</script>