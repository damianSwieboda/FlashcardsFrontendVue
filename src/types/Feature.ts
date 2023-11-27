export interface FeatureHeadline {
    introductoryTitle : string;
    descriptoryTitle: string;
    headlineDescription: string;
}

export interface FeatureDescription {
    name: string;
    description: string;
    icon: any ; // to change 
}

export interface Feature {
    imageLink: string;
    featureHeadline: FeatureHeadline;
    featureDescription: FeatureDescription[]
}