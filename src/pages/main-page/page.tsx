import Button from "../../shared/ui/button"
import SecondSession from "../../shared/ui/session/second-session"
import Text from "../../shared/ui/text"

const MainPage = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between py-8">
                    <img src="/images/logo.svg" />
                    <h4 className="text-xl font-[400]">Вход</h4>
                </nav>
            </div>
            <section className="container mx-auto px-4 py-8">
                {/* <div className="rightLines">
                    <img className="absolute top-0 right-0" src="/images/lines/right-line-1.png" alt="" />
                    <img className="absolute top-0 right-0" src="/images/lines/right-line-2.png" alt="" />
                    <img className="absolute top-0 right-0" src="/images/lines/right-line-3.png" alt="" />
                    <img className="absolute top-0 right-0" src="/images/lines/right-line-4.png" alt="" />
                </div>
                <div className="rightLines">
                    <img className="absolute bottom-0 left-0" src="/images/lines/right-line-1.png" alt="" />
                    <img className="absolute bottom-0 left-0" src="/images/lines/right-line-2.png" alt="" />
                    <img className="absolute bottom-0 left-0" src="/images/lines/right-line-3.png" alt="" />
                    <img className="absolute bottom-0 left-0" src="/images/lines/right-line-4.png" alt="" />
                </div> */}
                <h2 className="text-center text-4xl mx-auto font-[700] mb-8">Попробуйте передовые возможности в сфере искусственного интеллекта и психологии</h2>
                <div className="bg-cream w-full rounded-lg p-12">
                    <h3 className="text-primary text-3xl font-[700] text-center">Наш сервис</h3>
                    <p className="text-[#000000] text-center text-xl my-4">Это удобно: без очереди на запись и предоплаты, просто и выгодно - ваш персональный психолог всегда под рукой.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-xl p-6 bg-primary relative">
                            <Text title={"Общительный"} />
                            <p className="text-[18px] max-w-[250px]">Искусственный интеллект, применяющий практики психологии</p>
                            <img src="/images/icon-1.png" className="absolute bottom-0 right-0" />
                        </div>
                        <div className="rounded-xl p-6 bg-primary relative">
                            <Text title={"Поддерживает"} />
                            <p className="text-[18px] max-w-[250px]">Умеет разговаривать на любые темы, полностью конфиденциально</p>
                            <img src="/images/icon-2.png" className="absolute bottom-0 right-0" />
                        </div>
                        <div className="rounded-xl p-6 bg-gradient-to-br from-[#000000] to-primary relative">
                            <Text title={"Реалистичный"} />
                            <p className="text-[18px] max-w-[250px]">Разговаривает как реальный человек: эмпатичный и дружелюбный</p>
                            <img src="/images/icon-3.png" className="absolute top-0 right-0" />
                        </div>
                        <div className="rounded-xl p-6 bg-gradient-to-bl from-[#000000] to-primary relative">
                            <Text title={"Помогает"} />
                            <p className="text-[18px] max-w-[250px]">Подбирает нужную методику помощи, исходя из вашей ситуации</p>
                            <img src="/images/icon-4.png" className="absolute top-0 right-0" />
                        </div>
                    </div>
                    <Button title={"Начать"} className="mt-8 mb-6" />
                    <h3 className="text-[#000000] text-2xl text-center">Попробуйте <span className="font-[700]">бесплатно на 1 день</span></h3>
                </div>
            </section>

            {/*  */}

            <section className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-y-4">
                        <div className="p-8 pb-12 bg-[url('/images/radial-gradient-1.png')] rounded-xl bg-cover bg-center relative">
                            <Text title={"Как это выглядит?"} className="mb-8" />
                            <p className="text-lg">
                                Как чат с живым человеком. <br /><br />
                                Сеанс психотерапии проходит в формате вашего привычного общения с человеком.<br /><br />
                                Вы задаете тему, вопросы, общаетесь и получаете все необходимое: советы, эмоциональную поддержку, и ответы, которые помогут.
                            </p>
                            <img src="/images/chat.svg" className="absolute bottom-5 right-5" />
                        </div>
                        <SecondSession className="hidden md:block" />
                    </div>
                    <div className="flex justify-end">
                        <img src="/images/screenshot.png" className="mx-auto w-full md:w-fit" />
                    </div>
                    <SecondSession className="block md:hidden" />
                </div>
                <Button title={"Попробовать"} className="mt-8" />
            </section>

            {/*  */}

            <section className="container mx-auto px-4 py-8">
                <h2 className="text-[32px] font-[700] text-center mb-12">Сеанс.<span className="text-primary">online</span> - это:</h2>
                <div className="p-8 bg-[url(/images/radial-gradient-3.png)] bg-center bg-cover rounded-xl">
                    <div className="mb-12">
                        <Text title={"Удобно"} className="text-primary text-center mb-4" />
                        <p className="text-[20px]">Встроенный мессенджер - вам не нужен другой</p>
                    </div>
                    <div className="mb-12">
                        <Text title={"Анонимно"} className="text-primary text-center mb-4" />
                        <p className="text-[20px]">Сессии зашифрованы end-to-end encryption, хранятся только у вас</p>
                    </div>
                    <div className="mb-12">
                        <Text title={"Профессионально"} className="text-primary text-center mb-4" />
                        <p className="text-[20px]">
                            <span className="text-[#FF7081]"> За немалые деньги вы могли приобрести сессию у одного психолога в кабинете.</span>
                            <br /> <br />
                            А теперь, вам доступны многие практики психологии и огромный опыт человечества онлайн: передовые технологии в виде искусственного интеллекта, собранный в одном лице.
                            <br /> <br />
                            И это лицо - сеанс.онлайн 
                        </p>
                    </div>
                </div>
            </section>
        
</div> 
    ) 
}
 
export default MainPage