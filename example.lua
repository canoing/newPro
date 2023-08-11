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
local ValorSiallas = io.read()

print('Cantidad de sillas')
local CantidadSillas = io.read()

ValorTotal = valorSillas * CantidadSillas
print('El valor de las sillas es :$'..ValorTotal)