import { CircleDollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function Sales () {
    return(

        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                        Ultimos Clientes
                    </CardTitle>
                </div>
                <CircleDollarSign className="ml-auto w-4 h-4" />
            <CardTitle>
                Novos Clientes nas Ultimas 24 horas
            </CardTitle>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/devfraga.png"/>
                        <AvatarFallback>
                            DV
                        </AvatarFallback>
                    </Avatar>
                    <div>
                    <p className="text-sm sm:text-base font-semibold">Nome da pessoa que quiser colocar</p>
                    <span className="text-[12px] sm:text-sm text-gray-600">victordousseau027@gmail.com</span>

                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/devfraga.png"/>
                        <AvatarFallback>
                            DV
                        </AvatarFallback>
                    </Avatar>
                    <div>
                    <p className="text-sm sm:text-base font-semibold">Nome da pessoa que quiser colocar</p>
                    <span className="text-[12px] sm:text-sm text-gray-600">victordousseau027@gmail.com</span>

                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/devfraga.png"/>
                        <AvatarFallback>
                            DV
                        </AvatarFallback>
                    </Avatar>
                    <div>
                    <p className="text-sm sm:text-base font-semibold">Nome da pessoa que quiser colocar</p>
                    <span className="text-[12px] sm:text-sm text-gray-600">victordousseau027@gmail.com</span>

                    </div>
                </article>
            </CardContent>


        </Card>
    )
}