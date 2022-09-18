interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray';
    className?: string;
    children: any;
}

const corBotao = (cor?: string) => {
    const corRetorno = cor ?? 'gray';
    return `from-${corRetorno}-400 to-${corRetorno}-700`;
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={`
            bg-gradient-to-r ${corBotao(props.cor)}
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    );
};