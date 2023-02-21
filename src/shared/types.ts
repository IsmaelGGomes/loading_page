export enum SelectPage {
    Home = "home",
    Beneficios = "beneficios",
    OutraClasse = "outraclasses",
    ContactUs = "contate-nos",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}
export interface ClassType {
    name: string,
    image: string;
    description?: string;
}