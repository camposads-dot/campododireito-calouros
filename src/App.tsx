/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  FileText, 
  BookOpen, 
  ShieldCheck, 
  Star, 
  ArrowRight,
  HelpCircle,
  Plus,
  Mail,
  Instagram,
  User,
  Zap,
  Lock,
  ArrowDown
} from 'lucide-react';

// Common Components
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

const CTAButton = ({ children, secondary = false, href = "#pricing", className = "" }: { children: React.ReactNode, secondary?: boolean, href?: string, className?: string }) => (
  <a 
    href={href}
    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
      secondary 
        ? "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700" 
        : "bg-gold-gradient text-zinc-950 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)]"
    } ${className}`}
  >
    {children}
  </a>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
    {children}
  </span>
);

// --- Sections ---

const Hero = () => {
  const feedbackImages = [
    "/feedback1.png",
    "/feedback2.png",
    "/feedback3.png",
    "/feedback4.png",
    "/feedback5.png",
    "/feedback6.png",
    "/feedback7.png",
  ];

  const ebookImages = [
    "/associacaocodigo.jpg",
    "/espacodenotas.jpg",
    "/planodeestudo.jpg",
    "/simulado.jpg",
    "/sumariointerativo.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPreview, setCurrentPreview] = useState(0);

  return (
    <Section className="relative pt-12 md:pt-24 grid lg:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
  <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] -z-10 rounded-full" />

  {/* ESQUERDA */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center lg:text-left"
  >

    {/* BADGE */}
    <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-5 border border-amber-500/20">
      Método validado por +400 calouros
    </span>

    {/* TÍTULO */}
<h1 className="text-[2.2rem] md:text-5xl font-black leading-[1.05] tracking-tight text-center md:text-left">
  Pare de entrar nas aulas
  <br />
  sem entender nada

  <span className="text-amber-500 italic block mt-4">
    no 1° e 2° semestre
  </span>
</h1>

{/* SUBTÍTULO */}
<p className="text-base md:text-lg text-zinc-400 mt-6 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
  Aprenda as disciplinas mais importantes do 1° e 2° semestre de Direito
  de forma simples e estratégica — mesmo começando do zero.
  <br />
  <br />
  O método que já ajudou +400 calouros a entrarem na faculdade com mais
  clareza, segurança e confiança.
</p>

{/* MOCKUP SECTION */}
<div className="mb-8">

  <p className="text-amber-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-4 text-center lg:text-left">
    Tudo que você precisa para dominar o início do Direito
  </p>

  <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm overflow-hidden p-4 md:p-6">

    <div className="relative flex items-center justify-center">

      <img
        src="/mockuplivros.png"
        alt="Mockup dos materiais de Direito"
        className="w-full max-w-[520px] object-contain"
      />

    </div>

    <div className="mt-5 text-center lg:text-left">

      <p className="text-zinc-200 font-semibold text-sm md:text-base leading-relaxed">
        Acesso imediato às{" "}
        <span className="text-amber-400 font-extrabold">
          12 disciplinas + 4 bônus exclusivos
        </span>
      </p>

      <p className="text-zinc-500 text-xs md:text-sm mt-2 leading-relaxed">
        O atalho que todo calouro gostaria de ter antes da primeira aula.
      </p>

    </div>

  </div>

</div>

{/* VÍDEO YOUTUBE - MOBILE */}
<div className="w-full mt-2 mb-8 lg:hidden">

  <p className="text-amber-500 text-xs md:text-sm font-bold uppercase tracking-widest mb-4 text-center">
    Tudo que um calouro de Direito precisava ter aprendido antes da faculdade
  </p>

  <div className="w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
    <div className="aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/PbOzmQFBgU8?si=c8ymorxtK93UOHpN"
        title="Conheça o Material"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

</div>

<div className="space-y-6 flex flex-col items-center lg:items-start">

  {/* CARD INFO */}
  <div className="p-4 md:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 w-full backdrop-blur-sm">

    {/* TÍTULO */}
<div className="text-center sm:text-left">

  <p className="text-zinc-100 font-bold text-base md:text-lg leading-snug">
    Garanta hoje seu{" "}
    <span className="text-amber-400 font-extrabold">
      atalho para entender Direito desde o primeiro semestre.
    </span>
  </p>

  <p className="text-zinc-500 text-xs md:text-sm mt-2">
    Tudo que um calouro precisava para começar com clareza e confiança.
  </p>

</div>

{/* BENEFÍCIOS */}
<div className="mt-5 space-y-3">

  <div className="flex items-start gap-3 bg-zinc-950/40 border border-zinc-800 rounded-2xl p-3">
    <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-[2px]">
      <span className="text-amber-400 text-[11px]">✔</span>
    </div>

    <p className="text-sm text-zinc-300 leading-relaxed">
      Explicações simples para finalmente entender o juridiquês
    </p>
  </div>

  <div className="flex items-start gap-3 bg-zinc-950/40 border border-zinc-800 rounded-2xl p-3">
    <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-[2px]">
      <span className="text-amber-400 text-[11px]">✔</span>
    </div>

    <p className="text-sm text-zinc-300 leading-relaxed">
      Esquemas visuais para aprender mais rápido
    </p>
  </div>

  <div className="flex items-start gap-3 bg-zinc-950/40 border border-zinc-800 rounded-2xl p-3">
    <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-[2px]">
      <span className="text-amber-400 text-[11px]">✔</span>
    </div>

    <p className="text-sm text-zinc-300 leading-relaxed">
      Exemplos práticos conectados ao Código
    </p>
  </div>

  <div className="flex items-start gap-3 bg-zinc-950/40 border border-zinc-800 rounded-2xl p-3">
    <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-[2px]">
      <span className="text-amber-400 text-[11px]">✔</span>
    </div>

    <p className="text-sm text-zinc-300 leading-relaxed">
      Plano de estudo + simulados inclusos
    </p>
  </div>

  <div className="flex items-start gap-3 bg-zinc-950/40 border border-zinc-800 rounded-2xl p-3">
    <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-[2px]">
      <span className="text-amber-400 text-[11px]">✔</span>
    </div>

    <p className="text-sm text-zinc-300 leading-relaxed">
      Acesso imediato logo após a compra
    </p>
  </div>

</div>

{/* PROVA SOCIAL */}
<div className="mt-6 flex justify-center sm:justify-start">

  <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-3 rounded-2xl max-w-full">

    <span className="text-base">🔥</span>

    <p className="text-amber-300 text-xs sm:text-sm font-medium leading-relaxed">
      Mais de 400 calouros já começaram Direito com mais clareza usando esse método.
    </p>

  </div>

</div>

{/* GARANTIA */}
<div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs w-full">

  <div className="flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full px-3 py-2 text-zinc-400 text-center">
    ✔ Pagamento único
  </div>

  <div className="flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full px-3 py-2 text-zinc-400 text-center">
    ✔ Acesso imediato
  </div>

  <div className="flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full px-3 py-2 text-zinc-400 text-center">
    ✔ Garantia de 7 dias
  </div>

</div>

</div>

      {/* BOTÕES */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">

        {/* COMBO */}
        <CTAButton className="flex-1 relative overflow-hidden group flex flex-col items-center justify-center text-center min-h-[110px]">

          <div className="absolute top-2 right-2 bg-white text-black text-[8px] sm:text-[9px] font-extrabold px-2 py-1 rounded-full shadow-sm whitespace-nowrap">
            MAIS ESCOLHIDO
          </div>

          <span className="text-lg font-extrabold block leading-tight">
            Combo 1° + 2° Semestre
          </span>

          <span className="text-xs text-white/80 mt-2 block">
            12 Disciplinas + 04 Bônus Exclusivos
          </span>

        </CTAButton>

        {/* NORMAL */}
<CTAButton
  secondary={true}
  href="#individual"
  className="flex-1 flex flex-col items-center justify-center text-center min-h-[110px] scroll-smooth"
>

  <span className="text-lg font-bold block leading-tight">
    Apenas 1° Semestre
  </span>

  <span className="text-sm text-zinc-400 mt-1 block">
    5 Disciplinas + 02 Bônus Exclusivos
  </span>

  <span className="text-base text-zinc-200 mt-3 font-semibold block">
    R$ 37,90
  </span>

</CTAButton>

      </div>

    </div>

  </motion.div>

      {/* DIREITA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative space-y-8"
      >

        {/* VÍDEO YOUTUBE - DESKTOP */}
<div className="hidden lg:block mb-8">

  <p className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-4">
    Assista e conheça o material de estudo
  </p>

  <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
    <div className="aspect-video">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/PbOzmQFBgU8?si=c8ymorxtK93UOHpN"
        title="Conheça o Material"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>

</div>
        {/* BOX FEEDBACKS */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 min-h-[400px] overflow-hidden">
          <h3 className="text-amber-500 font-bold text-sm md:text-base mb-4">
            Arraste para o lado e veja os Feedbacks Reais:
          </h3>

          <div
            id="feedback-scroll"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const width = e.currentTarget.offsetWidth;
              setCurrentSlide(Math.round(scrollLeft / width));
            }}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {feedbackImages.map((img, i) => (
              <div
                key={i}
                className="min-w-full snap-center flex justify-center px-2"
              >
                <img
                  src={img}
                  alt=""
                  className="rounded-2xl border border-zinc-800 max-h-[300px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {feedbackImages.map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  document
                    .getElementById("feedback-scroll")
                    ?.scrollTo({
                      left:
                        document.getElementById("feedback-scroll")
                          .clientWidth * i,
                      behavior: "smooth",
                    })
                }
                className={`w-2 h-2 rounded-full ${
                  currentSlide === i
                    ? "bg-amber-500 w-6"
                    : "bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* NOVA BOX EBOOK */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 min-h-[400px] overflow-hidden">
          <h3 className="text-amber-500 font-bold text-sm md:text-base mb-4">
            Arraste para o lado e veja a prévia do e-book:
          </h3>

          <div
            id="ebook-scroll"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const width = e.currentTarget.offsetWidth;
              setCurrentPreview(Math.round(scrollLeft / width));
            }}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {ebookImages.map((img, i) => (
              <div
                key={i}
                className="min-w-full snap-center flex justify-center px-2"
              >
                <img
                  src={img}
                  alt=""
                  className="rounded-2xl border border-zinc-800 max-h-[300px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {ebookImages.map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  document
                    .getElementById("ebook-scroll")
                    ?.scrollTo({
                      left:
                        document.getElementById("ebook-scroll")
                          .clientWidth * i,
                      behavior: "smooth",
                    })
                }
                className={`w-2 h-2 rounded-full ${
                  currentPreview === i
                    ? "bg-amber-500 w-6"
                    : "bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const Problem = () => {
  const problems = [
    {
      title: "Excesso de conceitos abstratos",
      desc: "O aluno é apresentado a teorias complexas logo no início, sem contexto e sem base sólida para compreensão.",
      icon: <HelpCircle className="text-red-500" />
    },
    {
      title: "Linguagem jurídica difícil",
      desc: "Termos técnicos e juridiquês aparecem antes mesmo do aluno entender o funcionamento do Direito.",
      icon: <HelpCircle className="text-red-500" />
    },
    {
      title: "Sensação constante de atraso",
      desc: "Sem uma estrutura lógica, o estudante sente que está sempre correndo atrás e nunca dominando o conteúdo.",
      icon: <HelpCircle className="text-red-500" />
    }
  ];

  return (
    <Section className="bg-zinc-950">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge>O Grande Obstáculo</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Por que o início da faculdade de Direito confunde tanta gente?
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {problems.map((p, i) => (
          <motion.div 
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/30 transition-all duration-300"
          >
            <div className="mb-4">{p.icon}</div>
            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center p-8 rounded-3xl bg-red-500/5 border border-red-500/20 max-w-2xl mx-auto">
        <p className="text-lg text-zinc-300 italic">
          "O problema não é falta de esforço. <span className="text-red-500 font-bold">É falta de organização, clareza e método.</span>"
        </p>
      </div>
    </Section>
  );
};

const Solution = () => {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge>A Solução</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            O que muda com o <span className="text-gold-gradient">Direito Simplificado?</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            <p>
              O Direito Simplificado organiza os conteúdos essenciais dos primeiros 6 meses da faculdade in uma sequência lógica, clara e acessível.
            </p>
            <p className="text-zinc-200 font-medium">
              Você entende o Direito antes de tentar decorar o Direito.
            </p>
            <p>
              O resultado é mais segurança, mais clareza e uma base sólida para acompanhar a faculdade com confiança desde o início.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 transition-colors text-center md:text-left"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 flex-shrink-0">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Tempo Economizado</h4>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed italic">Aprenda em 7 dias o que leva meses</p>
              <p className="mt-2 text-zinc-400 text-sm md:text-base">Ganhe meses de vantagem dominando os fundamentos de forma acelerada.</p>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-colors text-center md:text-left"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Segurança Total</h4>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed italic">Domine a base da faculdade</p>
              <p className="mt-2 text-zinc-400 text-sm md:text-base">Acabe com a insegurança e o medo de se sentir perdido nas aulas.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const Bonuses = () => {
  const bonuses = [
    {
      title: "Teoria Pura do Direito - Hans Kelsen",
      desc: "A obra mais importante para compreender o Direito em sua essência.",
      tag: "Grátis Hoje"
    },
    {
      title: "Fatores de Mudança no Direito",
      desc: "Entenda porque as leis mudam, quais forças influenciam o sistema jurídico.",
      tag: "Grátis Hoje"
    },
    {
      title: "As Escolas do Direito",
      desc: "O Direito não é uma ciência exata, conheça as escolas que influenciaram o ordenamento.",
      tag: "Grátis Hoje"
    },
    {
      title: "Direito Natural VS Direito Positivo",
      desc: "O debate que influencia a forma como os sistemas jurídicos se estruturam.",
      tag: "Grátis Hoje"
    }
  ];

  return (
    <Section className="bg-zinc-900/30 rounded-3xl">
      <div className="text-center mb-16">
        <Badge>Presentes Exclusivos</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">BÔNUS EXCLUSIVOS</h2>
        <p className="text-zinc-500">Materiais estratégicos para acelerar sua jornada acadêmica.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {bonuses.map((b, i) => (
          <div key={i} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between hover:border-amber-500/50 transition-colors group">
            <div>
              <span className="text-[10px] font-bold text-amber-500 px-2 py-0.5 rounded-full border border-amber-500/30 mb-4 inline-block uppercase bg-amber-500/5">
                {b.tag}
              </span>
              <h3 className="font-bold text-lg mb-2 leading-tight group-hover:text-amber-500 transition-colors">{b.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">{b.desc}</p>
            </div>
            <FileText size={40} className="text-zinc-800 group-hover:text-amber-500/20 transition-colors" />
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <CTAButton>
          QUERO O COMBO COM TODOS OS BÔNUS
        </CTAButton>
      </div>
    </Section>
  );
};

const SocialProof = () => {
  const feedbacks = [
    {
      image: "/feedback1.png",
      text: "Comprei o e-book dele e estou amando, estou mais segura para iniciar, já estou matriculada!",
    },
    {
      image: "/feedback2.png",
      text: "Eu to adorando o E-book.",
    },
    {
      image: "/feedback3.png",
      text: "Material incrível! Já estou estudando por ele",
    },
    {
      image: "/feedback4.png",
      text: "Obrigada Natan, e eu adorei o ebook, é bem detalhado, principalmente para mim que estou começando agora na faculdade, vai ajudar bastante!",
    },
    {
      image: "/feedback5.png",
      text: "Comprei, realmente bem resumido",
    },
    {
      image: "/feedback6.png",
      text: "Gostei do material! Já adquiri",
    },
    {
      image: "/feedback7.png",
      text: "Fala meu amigo, boa tarde, já consegui e muito obrigado. Excelente conteúdo!",
    },
  ];

  const isMobile = useIsMobile();

  return (
    <Section className="overflow-hidden">
      <div className="text-center mb-16">
        <Badge>O que dizem</Badge>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          O QUE OS CALOUROS ACHAM DO MATERIAL?
        </h2>

        <p className="text-zinc-500">
          Veja o feedback real de estudantes que já começaram a estudar com o material.
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: isMobile ? 15 : 45,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...feedbacks, ...feedbacks].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 md:w-80 h-[450px] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden relative group"
            >
              <img
                src={item.image}
                alt="Feedback"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className="text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-white font-semibold italic leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

const TargetAudience = () => {
  const groups = [
    {
      title: "Estudantes do 2° Período",
      desc: "Que querem dar continuidade ao estudo com mais segurança e clareza.",
      icon: <Zap />
    },
    {
      title: "Calouros de Direito",
      desc: "Ainda não entendem as regras básicas e se sentem perdidos nos primeiros dias.",
      icon: <User />
    },
    {
      title: "Veteranos de Revisão",
      desc: "Que precisam revisar o conteúdo inicial com precisão, lógica e autoridade.",
      icon: <BookOpen />
    }
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <Badge>Público-Alvo</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Para quem é esse combo?</h2>
        <p className="text-zinc-500">Identifique sua fase e veja como podemos acelerar seu aprendizado.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {groups.map((g, i) => (
          <div key={i} className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 transition-all text-center group">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              {g.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{g.title}</h3>
            <p className="text-zinc-400">{g.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ProductPreview = () => {
  const isMobile = useIsMobile();

  const previewImages = [
    {
      url: "/associacaocodigo.jpg",
      title: "Associação com o Código",
    },
    {
      url: "/espacodenotas.jpg",
      title: "Espaço de Notas",
    },
    {
      url: "/planodeestudo.jpg",
      title: "Plano de Estudo",
    },
    {
      url: "/simulado.jpg",
      title: "Simulado de Prova",
    },
    {
      url: "/sumariointerativo.jpg",
      title: "Sumário Interativo",
    },
  ];

  const reviews = [
    {
      title: "Conheça o E-Book 01",
      embed: "https://www.youtube.com/embed/0esmfaCBjOI",
    },
    {
      title: "Conheça o E-Book 02",
      embed: "https://www.youtube.com/embed/pzQFMvp9LRk",
    },
  ];

  return (
    <Section className="bg-zinc-950">
      {/* Carrossel das imagens */}
      <div className="mb-12 overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: isMobile ? 12 : 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...previewImages, ...previewImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-80 text-center">
              <p className="text-amber-500 text-xs font-bold uppercase mb-4 tracking-widest">
                {img.title}
              </p>

              <div className="rounded-2xl border border-zinc-800 overflow-hidden aspect-[3/4] bg-zinc-900 shadow-2xl">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reviews em vídeo */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reviews.map((review, i) => (
          <div key={i} className="text-center">
            <p className="text-amber-500 text-xs font-bold uppercase mb-4 tracking-widest">
              {review.title}
            </p>

            <div className="aspect-video bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src={review.embed}
                title={review.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
import { 
  CheckCircle2,
  MessageCircle
} from 'lucide-react';

const VideoFeedback = () => {
  return (
    <Section className="bg-zinc-950/60 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto text-center">

        <Badge>
          Feedback Real
        </Badge>

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Feedback Real e{" "}
          <span className="text-amber-500">
            Alerta contra Golpes
          </span>
        </h2>

        <p className="text-zinc-400 mb-10 text-base md:text-lg">
          Assiste esse feedback e tire suas conclusões
        </p>

        {/* VIDEO */}
        <div className="max-w-[360px] mx-auto rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl">
          <div className="aspect-[9/16]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/HkFy9iBS5Gc?si=cIHtbZ7GlO96O9yc"
              title="Feedback Real"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <p className="text-xs md:text-sm text-zinc-500 mt-8 italic max-w-md mx-auto">
          Esse é um relato real de aluno. Veja antes de decidir sua compra.
        </p>

      </div>
    </Section>
  );
};

const Offer = () => {
  return (
    <Section id="pricing" className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="text-center mb-12 md:mb-16">
        <Badge>Esoclha seu material de estudo</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Escolha seu acesso:</h2>
        <p className="text-sm md:text-base text-zinc-500">
          Invista agora e garanta sua vantagem competitiva desde o 1º dia.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        
        {/* Individual */}
<div
  id="individual"
  className="p-6 md:p-12 rounded-[32px] md:rounded-[40px] bg-zinc-900 border border-zinc-800 flex flex-col justify-between"
>
  <div>
    <h3 className="text-xl md:text-2xl font-bold mb-2">
      E-Book Semestre 1
    </h3>

    <p className="text-zinc-500 text-xs md:text-sm mb-6 font-medium">
      Aprenda os primeiros 6 meses de Direito em 7 dias!
    </p>
    
    <div className="mb-6 md:mb-8 p-4 md:p-6 rounded-2xl bg-zinc-950/50 border border-zinc-800">
      <p className="text-zinc-500 line-through text-xs md:text-sm">
        de R$ 97,90
      </p>

      <div className="flex items-baseline gap-2">
        <span className="text-xs md:text-sm font-bold text-amber-500">
          por R$
        </span>

        <span className="text-4xl md:text-5xl font-black text-zinc-100">
          37,90
        </span>
      </div>
    </div>
    
    <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
      {[
        "Introdução ao Estudo do Direito",
        "Ciências Políticas, Estado e Constituição",
        "Criminologia, Antropologia, História do Direito",
        "+ 2 Bônus Exclusivos"
      ].map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-3 text-zinc-400 text-xs md:text-sm"
        >
          <CheckCircle2
            size={16}
            className="text-emerald-500 flex-shrink-0"
          />
          {item}
        </li>
      ))}
    </ul>
  </div>

  <CTAButton
    secondary
    href="https://pay.cakto.com.br/mecgdur"
    className="w-full"
  >
    COMPRAR INDIVIDUAL
  </CTAButton>
</div>
        {/* Combo */}
        <div className="p-6 md:p-12 rounded-[32px] md:rounded-[40px] bg-zinc-900 border-2 border-amber-500 relative overflow-hidden shadow-[0_0_50px_rgba(217,119,6,0.15)] order-first md:order-last">
          
          <div className="absolute top-0 right-0 px-4 md:px-6 py-1 md:py-2 bg-amber-500 text-zinc-950 font-bold text-[10px] md:text-xs uppercase tracking-widest rounded-bl-xl md:rounded-bl-2xl">
            Mais Vendido
          </div>
          
          <div>
            <div className="mb-2">
              <h3 className="text-2xl md:text-3xl font-black text-gold-gradient">
                COMBO ESPECIAL 2026
              </h3>
            </div>

            <p className="text-zinc-500 text-xs md:text-sm mb-6 md:mb-8 font-medium">
              E-Book 1 + E-Book 2 + 4 Bônus - com 12 Disciplinas
            </p>
            
            <div className="mb-6 md:mb-8 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-amber-500 text-zinc-950">
              <p className="text-zinc-900/60 line-through text-xs md:text-sm font-bold">
                De R$ 157,90
              </p>

              <div className="flex items-baseline gap-2">
                <span className="text-xs md:text-sm font-bold">
                  por R$
                </span>

                <span className="text-5xl md:text-6xl font-black">
                  57,90
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-3 md:gap-y-4 gap-x-2 mb-8 md:mb-10">
              {[
                "Esquemas Simplificados",
                "Exemplos Práticos",
                "Associação com o Código",
                "Espaço para anotações",
                "Plano de Estudo incluso",
                "Simulado por disciplina"
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-zinc-200 text-[10px] md:text-xs font-medium"
                >
                  <CheckCircle2
                    size={14}
                    className="text-zinc-950"
                    fill="#f59e0b"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          {/* Botão principal */}
          <CTAButton
            href="https://pay.cakto.com.br/33wuu35"
            className="w-full text-lg md:text-xl py-5 md:py-6"
          >
            GARANTIR COMBO COMPLETO
          </CTAButton>

          {/* Botão WhatsApp */}
<div className="flex justify-center">
  <a
    href="https://wa.me/5569992294465?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20Combo%20Especial%202026."
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:w-[90%] mt-4 flex items-center justify-center text-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 transition-all duration-300 py-4 px-4 text-sm md:text-base font-semibold text-zinc-200"
  >
    <MessageCircle
      size={18}
      className="text-emerald-500 flex-shrink-0"
    />

    <span className="leading-tight">
      Ainda com dúvidas? Me chame no WhatsApp
    </span>
  </a>
</div>

<p className="text-center text-[8px] md:text-[10px] text-zinc-500 mt-4 uppercase font-bold tracking-widest">
  Oferta por tempo limitado
</p>
        </div>
      </div>
    </Section>
  );
};

const Summary = () => {
  return (
    <Section className="bg-zinc-900/50 rounded-[40px] mt-20">
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Não leu tudo? Vou resumir pra você.</h2>
        <div className="bg-zinc-950/50 p-8 md:p-12 rounded-3xl border border-zinc-800 space-y-6 text-zinc-400 text-lg leading-relaxed text-center">
          <p>
            Se a ideia de aprender em menos de 30 dias o que a maioria leva 12 meses de faculdade para entender faz sentido pra você… então essa oferta foi feita sob medida.
          </p>
          <p className="text-zinc-200 font-medium">
            Eu realmente acredito que adquirir este ebook é uma decisão inteligente para quem quer começar o Direito com clareza e confiança.
          </p>
          <p>
            Não posso prometer que você vai se tornar um especialista da noite para o dia. Mas posso garantir acesso a um método testado, que encurta o caminho e simplifica os fundamentos essenciais do Direito.
          </p>
          <p>
            A proposta é simples: aprender os conceitos fundamentais dos primeiros 12 meses de Direito em menos de 30 dias, aplicando uma metodologia prática, direta e fácil de entender.
          </p>
          <p className="border-y-2 border-amber-500/20 py-6 italic">
            Este ebook será seu guia oficial para acelerar seus estudos, evitar confusão e dominar a base da faculdade.
          </p>
          <p className="text-amber-500 font-bold text-xl">
            E o melhor: adquirindo hoje, você garante 85% de desconto + 4 bônus exclusivos. Pagamento único, sem pegadinhas, e 7 dias de garantia.
          </p>
        </div>
      </div>
    </Section>
  );
};

const PriceReasoning = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <Badge>Transparência</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">“Ok… mas se é tão bom, por que está tão barato?”</h2>
        <p className="text-zinc-500">Eu sei — essa pergunta provavelmente passou pela sua cabeça. E a resposta é mais simples (e estratégica) do que parece.</p>
      </div>
      
      <div className="grid items-center lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        <div className="p-8 md:p-12 rounded-[32px] md:rounded-[40px] bg-gold-gradient text-zinc-950 text-center shadow-2xl">
            <p className="font-bold text-xs md:text-sm uppercase mb-1 md:mb-2">O valor de</p>
            <h3 className="text-5xl md:text-7xl font-black mb-3 md:mb-4">R$ 57,90</h3>
            <p className="font-bold text-zinc-950/70 text-sm md:text-base">não é aleatório.</p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-3">
              <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs md:text-sm">1</span>
              Razão #1
            </h4>
            <p className="text-zinc-500 border-l border-zinc-800 pl-10 md:pl-11 text-sm md:text-base">
              O preço não pode ser um obstáculo. A ideia é permitir que qualquer pessoa interessada em Direito consiga começar com clareza, sem travas financeiras.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-3">
              <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-xs md:text-sm">2</span>
              Razão #2
            </h4>
            <p className="text-zinc-500 border-l border-zinc-800 pl-10 md:pl-11 text-sm md:text-base">
              Proteção contra curiosos. Mesmo sendo acessível, um valor simbólico afasta quem só busca soluções gratuitas sem compromisso.
            </p>
          </div>
          
          <p className="text-zinc-400 font-medium italic text-sm md:text-base">
            Quem realmente aproveita o ebook costuma querer ir além, explorar outros materiais e aprofundar os estudos no futuro.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 py-6 px-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center md:text-left">
            <ShieldCheck size={40} className="text-emerald-500 flex-shrink-0" />
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-300 leading-relaxed max-w-xs md:max-w-none">Sem pegadinhas. Sem letras miúdas. Nada escondido.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <CTAButton>OK! ME CONVENCEU</CTAButton>
      </div>
    </Section>
  );
};

const Reception = () => {
  return (
    <Section className="bg-zinc-900/30 rounded-3xl">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="w-20 h-20 bg-amber-500/20 text-amber-500 rounded-3xl mx-auto flex items-center justify-center">
          <Zap size={40} />
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">Em quanto tempo recebo meu acesso?</h2>
        <p className="text-xl text-zinc-400 leading-relaxed">
          Logo após a aprovação do seu pagamento, você receberá no e-mail utilizado na compra um link para você acessar a pasta no Drive e usufruir do material.
        </p>
      </div>
    </Section>
  );
};

const Guarantee = () => {
  return (
    <Section>
      <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[50px] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/20 relative overflow-hidden text-center">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10 rounded-full" />
        
        <div className="w-24 h-24 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto mb-8 flex items-center justify-center border border-emerald-500/20">
          <CheckCircle2 size={48} />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Garantia Incondicional de 7 Dias</h2>
        
        <div className="max-w-2xl mx-auto space-y-6 text-xl text-zinc-400 leading-relaxed">
          <p>
            Experimente o Direito Simplificado por 7 dias completos. Se não sentir clareza, segurança ou evolução real, você pode solicitar o reembolso.
          </p>
          <div className="py-4 border-y border-zinc-800 inline-block px-12">
             <p className="text-zinc-200 font-bold uppercase tracking-widest text-sm">Risco zero. Decisão sem pressão.</p>
          </div>
          <p className="text-emerald-500 font-bold">
            Ou você aprende com método — ou devolvemos 100% do seu dinheiro.
          </p>
        </div>
      </div>
    </Section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "O material serve para qualquer faculdade?",
      a: "Sim! Abordamos os conceitos fundamentais que são base de todas as grades curriculares de Direito no Brasil."
    },
    {
      q: "Como recebo o acesso?",
      a: "Immediatamente após a confirmação do pagamento, você recebe um e-mail com os links para download."
    },
    {
      q: "Posso imprimir os E-books?",
      a: "Com certeza! Os materiais são entregues em PDF de alta qualidade."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="text-center mb-16">
        <Badge>Esclarecimentos</Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gold-gradient">Dúvidas Frequentes</h2>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-4 mb-16">
        {faqs.map((f, i) => (
          <div key={i} className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 text-left flex justify-between items-center transition-colors hover:bg-zinc-800"
            >
              <span className="font-bold text-lg">{f.q}</span>
              <Plus className={`transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-zinc-400"
                >
                  <p className="pt-2">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <CTAButton>OK! ME CONVENCEU</CTAButton>
      </div>
    </Section>
  );
};

const Biography = () => {
  return (
    <Section className="bg-zinc-900/40 rounded-[50px]">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* FOTO */}
        <div className="relative aspect-square rounded-[60px] overflow-hidden bg-zinc-800 border-4 border-amber-500/20 max-w-md mx-auto">
          <img
            src="/perfil.png"
            alt="Natan Campos"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

          <div className="absolute bottom-8 left-8">
            <h3 className="text-3xl font-black text-white">Natan Campos</h3>
            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs">
              Mentor e Veterano em Direito
            </p>
          </div>
        </div>

        {/* TEXTO */}
        <div className="text-center lg:text-left">
          <Badge>Abaixo do Juridiquês</Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 uppercase">
            OPA! MUITO PRAZER 👋
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
            <p>
              Me chamo <span className="text-zinc-100 font-bold">Natan Campos.</span>
              Atualmente no 7º período de Direito, já ajudei mais de 400 calouros a dominarem a base do curso sem termos técnicos complicados.
            </p>

            <p>
              Minha missão é clara:
              <span className="text-amber-500 italic"> economizar o seu tempo.</span>
              Estudei na PUC/RS e desenvolvi uma estratégia prática para você aprender em 7 dias o que a faculdade tenta ensinar em meses.
            </p>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-5 md:p-6 rounded-3xl bg-zinc-950/50 border border-zinc-800 text-center">
              <p className="text-2xl md:text-3xl font-black text-amber-500 mb-1">400+</p>
              <p className="text-[10px] md:text-xs text-zinc-500 uppercase font-bold tracking-widest leading-none">
                Alunos Satisfeitos
              </p>
            </div>

            <div className="p-5 md:p-6 rounded-3xl bg-zinc-950/50 border border-zinc-800 text-center">
              <a
                href="https://instagram.com/nataneodireito"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mb-1 hover:text-amber-500 transition-colors"
              >
                <Instagram size={18} className="text-amber-500" />
                <p className="text-sm md:text-base font-bold">@nataneodireito</p>
              </a>

              <p className="text-[10px] md:text-xs text-zinc-500 uppercase font-bold tracking-widest leading-none">
                Me siga no Instagram
              </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 text-center">
      <div className="mb-8 flex justify-center items-center gap-2">
        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-zinc-950 font-black italic">D</div>
        <span className="text-xl font-black tracking-tighter">DIREITO SIMPLIFICADO</span>
      </div>
      <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">
        © 2026 NATAN E O DIREITO • TODOS OS DIREITOS RESERVADOS
      </p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-amber-500 selection:text-zinc-950 overflow-x-hidden max-w-full">
    
      <Hero />
      <Problem />
      <Solution />
      <Bonuses />
      <SocialProof />
      <VideoFeedback />
      <TargetAudience />
      <ProductPreview />
      <VideoFeedback />
      <Offer />
      <Summary />
      <PriceReasoning />
      <Reception />
      <Guarantee />
      <FAQ />
      <Biography />
      <Footer />
    </div>
  );
}