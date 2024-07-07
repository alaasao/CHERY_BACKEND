const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
  Color: { type: Boolean, required: true },
  Images: { type: [String] },
});
const CarSchema = mongoose.Schema({
  Images: {
    type: [ImageSchema],

    
  },
  Modele: { type: String, required: true },
  Garentie: { type: String, required: true },
  Disponibilite: { type: Boolean, required: true },
  Prix_TTC: { type: Number, required: true },
  Moteur: { type: String, required: true },
  promo: {
    type: {
      IsPromo: Boolean,
      Start: String,
      End: String,
      Value: Number,
    },
  },
  ComfortObj: {
    type: {
      Climatisation: String,
      Direction: String,
      Ecran: String,
      Accoudoir: String,
      Sieges_Chauffants: Boolean,
      Boire_A_Gants_Refrigerante: Boolean,
      Ordinateur_De__Bord: Boolean,
      Radar_De_Recul: Boolean,
      Autoradio: String,
      bluetooth: Boolean,
    },
  },
  VehiculeObj: {
    type: {
      Volume_Coffre: Number,
      Longueur: Number,
      Largeur: Number,
      Hauteur: Number,
      Empattement: Number,
      Suspension_Avant: String,
      Suspension_Arriere: String,
      Nombre_Places: Number,
      Nombre_Portes: Number,
      Reservoir: Number,
    },
  },
  LookObj: {
    type: {
      Feux_Anti_Arouillard: {
            type: [{ type: String }],
            default:undefined
      },
      Feux_Avant: String,
      Peinture_Metalisee: Boolean,
      Toit: Boolean,
      Vitres_Teintees: Boolean,
      Feux_Jour: String,
      Feux_Arriere: String,
      Jantes: Number,
      Couleur_Poignees: String,
      Dimension_Pneumatique: String,
    },
  },
  SecurityObj: {
    type: {
      Airbag: Number,
      Regulateur_Limiteur_de_Vitesse: String,
      Abs: Boolean,
      Keyless: String,
      Esp: Boolean,
      Détecteur_Angle_Mort: Boolean,
      Aide_Demarrage_Cote: Boolean,
      Anti_Demarrage: Boolean,
      Verrouillage_Centralise: String,
      Alarme: String,
    },
  },
  MoteurObj: {
    type: {
      Energie: String,
      Motricite: String,
      Type_Moteur: String,
      Cylidree: Number,
      Boite: String,
      Consomation: String,
      Puissance: Number,
      Nombre_Cylindres: String,
      Soupapes: Number,
      Accelaration: Number,
      Puissance_Tr: Number,
      Turbo: Boolean,
      Nombre_Rapport_Boite: Number,
      Vitesse_Max: Number,
      Couple: Number,
    }, // Assuming this refers to engine torque
  },
},
{ timestamps: true });
module.exports = mongoose.model("Car", CarSchema);
