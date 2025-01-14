import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-5"/>
            </div>

            <CardDescription>
              Total Vendas em 90 Dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
            </CardContent>
          </CardHeader>
           </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-5"/>
            </div>

            <CardDescription>
              Novos Clientes em 30 Dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">200</p>
            </CardContent>
          </CardHeader>
           </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos Hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-5"/>
            </div>

            <CardDescription>
              Total Pedidos Hoje
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">65</p>
            </CardContent>
          </CardHeader>
           </Card>

           <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Pedidos
              </CardTitle>
              <Package className="ml-auto w-4 h-5"/>
            </div>

            <CardDescription>
              Total Pedidos 30 Dias
            </CardDescription>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">2400</p>
            </CardContent>
          </CardHeader>
           </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
      </main>
  );
}
