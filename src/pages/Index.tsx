import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const handleTelegramClick = () => {
    window.open("https://t.me/+QgiLIa1gFRY4Y2Iy", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <div className="text-6xl mb-4">☦️</div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Путь к Духовному Свету
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Приглашаем вас в путешествие через мудрость святых отцов и глубины православного учения
          </p>
          <Button
            size="lg"
            onClick={handleTelegramClick}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full hover-scale"
          >
            <Icon name="Send" className="mr-2" size={20} />
            Присоединиться к каналу
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-card/50 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">✨</div>
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-4 text-foreground">
                    Миссия нашего канала
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Мы создали это пространство для всех верующих христиан, кто стремится к духовному развитию и углублению знаний о православии.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Наш канал — это место, где древняя мудрость встречается с современностью, где каждый может найти поддержку и вдохновение на пути к Богу.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-foreground">
            Святые Отцы и их Учения
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "BookOpen",
                title: "Писания святых",
                description: "Изучаем труды великих богословов и подвижников православной церкви"
              },
              {
                icon: "Heart",
                title: "Духовная практика",
                description: "Учимся применять учения святых отцов в повседневной жизни"
              },
              {
                icon: "Lightbulb",
                title: "Толкования",
                description: "Разбираем сложные моменты и получаем ясное понимание учений"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover-scale transition-all bg-card/50 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-block p-4 rounded-full bg-primary/10">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-foreground">
            Материалы для Духовного Роста
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "📖",
                title: "Ежедневные чтения",
                description: "Святоотеческие тексты и молитвы на каждый день"
              },
              {
                emoji: "🕯️",
                title: "Духовные советы",
                description: "Практические рекомендации для жизни по заповедям"
              },
              {
                emoji: "🙏",
                title: "Молитвенная жизнь",
                description: "Углубление молитвенной практики и богообщения"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover-scale transition-all bg-card/50 backdrop-blur">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-4xl">{item.emoji}</div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">🕊️</div>
          <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">
            Начните Ваш Духовный Путь Сегодня
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Присоединяйтесь к нашему сообществу верующих и откройте для себя богатство православной традиции
          </p>
          <Button
            size="lg"
            onClick={handleTelegramClick}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full hover-scale"
          >
            <Icon name="Send" className="mr-2" size={20} />
            Перейти в Телеграм канал
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            С любовью к Богу и ближнему • 2026
          </p>
        </div>
      </footer>
    </div>
  );
}