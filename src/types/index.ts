
export type Breed = {
    id: number;
    name: string;
    origin: string;
    weight: Masurement;
    height: Masurement;
    bred_for: string;
    breed_group: string;
    life_span: string;
    history?: string;
    description?: string;
    temperament: string;
    reference_image_id: string;
}

type Masurement = {
    imperial: string;
    metric: string;
}