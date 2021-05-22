funcionarios = [
    {nome: "Matheus", cargo: "Secretario", salario: 1500},
    {nome: "Aline", cargo: "Diretora", salario: 1800},
    {nome: "José", cargo: "Assistente", salario: 1200},
    {nome: "Abílio", cargo: "Telefonista", salario: 1280},
    {nome: "José", cargo: "Segurança", salario: 1600}
]

ordemNome = funcionarios.sort_by { |ordem| ordem[:nome] }
ordemCargo = funcionarios.sort_by { |ordem| ordem[:cargo] }
ordemSalario = funcionarios.sort_by { |ordem| ordem[:salario] }

puts "ORDEM POR NOME"
puts ordemNome;
puts "\nORDEM POR CARGO"
puts ordemCargo
puts "\nORDEM POR SALARIO"
puts ordemSalario

