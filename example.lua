---@diagnostic disable: lowercase-global
-- Una compañia vende sillas a $50, un cliente compra 6 sillas, ¿Cuánto paga el cliente? 



-- Creamos la función
local function CalcularPrecio(valorSillas, cantidadSillas)
    local precioTotal = cantidadSillas * valorSillas

    -- Imprimimos el resultado
    print('El valor total de las sillas es de: $'..precioTotal)
end

CalcularPrecio(50, 6)



-- Tambien podemos hacerlo de esta forma
print('Valor de las sillas: $')
local vSiallas = io.read()

print('Cantidad de sillas')
local cSillas = io.read()

vTotal = vSiallas * cSillas
print('El valor de las sillas es :$'..vTotal)