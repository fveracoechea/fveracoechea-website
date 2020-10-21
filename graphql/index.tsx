import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Datetime scalar type. */
  Datetime: any;
  /**
   * The `JSON` scalar type represents JSON values as specified by
   *         [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
   */
  JSON: any;
};

export type AboutMe = {
  __typename?: 'AboutMe';
  data?: Maybe<Array<Maybe<AboutMeItem>>>;
  meta?: Maybe<Metadata>;
};

export type AboutMeFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  created_on_eq?: Maybe<Scalars['Datetime']>;
  created_on_neq?: Maybe<Scalars['Datetime']>;
  created_on_lt?: Maybe<Scalars['Datetime']>;
  created_on_lte?: Maybe<Scalars['Datetime']>;
  created_on_gt?: Maybe<Scalars['Datetime']>;
  created_on_gte?: Maybe<Scalars['Datetime']>;
  created_on_in?: Maybe<Scalars['Datetime']>;
  created_on_nin?: Maybe<Scalars['Datetime']>;
  created_on_between?: Maybe<Scalars['String']>;
  created_on_nbetween?: Maybe<Scalars['String']>;
  full_name_eq?: Maybe<Scalars['String']>;
  full_name_neq?: Maybe<Scalars['String']>;
  full_name_contains?: Maybe<Scalars['String']>;
  full_name_ncontains?: Maybe<Scalars['String']>;
  full_name_rlike?: Maybe<Scalars['String']>;
  full_name_nrlike?: Maybe<Scalars['String']>;
  full_name_empty?: Maybe<Scalars['String']>;
  full_name_nempty?: Maybe<Scalars['String']>;
  full_name_null?: Maybe<Scalars['String']>;
  full_name_nnull?: Maybe<Scalars['String']>;
  picture_all?: Maybe<Scalars['String']>;
  picture_has?: Maybe<Scalars['String']>;
  descriptions_all?: Maybe<Scalars['String']>;
  descriptions_has?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<AboutMeFilter>>>;
  and?: Maybe<Array<Maybe<AboutMeFilter>>>;
};

export type AboutMeItem = {
  __typename?: 'AboutMeItem';
  id: Scalars['ID'];
  created_on?: Maybe<Scalars['Datetime']>;
  full_name: Scalars['String'];
  picture: DirectusFileItem;
  descriptions?: Maybe<Scalars['JSON']>;
};

export type Contact = {
  __typename?: 'Contact';
  data?: Maybe<Array<Maybe<ContactItem>>>;
  meta?: Maybe<Metadata>;
};

export type ContactFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  created_on_eq?: Maybe<Scalars['Datetime']>;
  created_on_neq?: Maybe<Scalars['Datetime']>;
  created_on_lt?: Maybe<Scalars['Datetime']>;
  created_on_lte?: Maybe<Scalars['Datetime']>;
  created_on_gt?: Maybe<Scalars['Datetime']>;
  created_on_gte?: Maybe<Scalars['Datetime']>;
  created_on_in?: Maybe<Scalars['Datetime']>;
  created_on_nin?: Maybe<Scalars['Datetime']>;
  created_on_between?: Maybe<Scalars['String']>;
  created_on_nbetween?: Maybe<Scalars['String']>;
  info_eq?: Maybe<Scalars['String']>;
  info_neq?: Maybe<Scalars['String']>;
  info_contains?: Maybe<Scalars['String']>;
  info_ncontains?: Maybe<Scalars['String']>;
  info_rlike?: Maybe<Scalars['String']>;
  info_nrlike?: Maybe<Scalars['String']>;
  info_empty?: Maybe<Scalars['String']>;
  info_nempty?: Maybe<Scalars['String']>;
  info_null?: Maybe<Scalars['String']>;
  info_nnull?: Maybe<Scalars['String']>;
  icon_eq?: Maybe<Scalars['String']>;
  icon_neq?: Maybe<Scalars['String']>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_ncontains?: Maybe<Scalars['String']>;
  icon_rlike?: Maybe<Scalars['String']>;
  icon_nrlike?: Maybe<Scalars['String']>;
  icon_empty?: Maybe<Scalars['String']>;
  icon_nempty?: Maybe<Scalars['String']>;
  icon_null?: Maybe<Scalars['String']>;
  icon_nnull?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<ContactFilter>>>;
  and?: Maybe<Array<Maybe<ContactFilter>>>;
};

export type ContactItem = {
  __typename?: 'ContactItem';
  id: Scalars['ID'];
  created_on?: Maybe<Scalars['Datetime']>;
  info: Scalars['String'];
  icon: Scalars['String'];
};


export type DirectusActivity = {
  __typename?: 'DirectusActivity';
  data?: Maybe<Array<Maybe<DirectusActivityItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusActivityFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  action_eq?: Maybe<Scalars['String']>;
  action_neq?: Maybe<Scalars['String']>;
  action_contains?: Maybe<Scalars['String']>;
  action_ncontains?: Maybe<Scalars['String']>;
  action_rlike?: Maybe<Scalars['String']>;
  action_nrlike?: Maybe<Scalars['String']>;
  action_empty?: Maybe<Scalars['String']>;
  action_nempty?: Maybe<Scalars['String']>;
  action_null?: Maybe<Scalars['String']>;
  action_nnull?: Maybe<Scalars['String']>;
  action_by_eq?: Maybe<Scalars['Int']>;
  action_by_neq?: Maybe<Scalars['Int']>;
  action_by_lt?: Maybe<Scalars['Int']>;
  action_by_lte?: Maybe<Scalars['Int']>;
  action_by_gt?: Maybe<Scalars['Int']>;
  action_by_gte?: Maybe<Scalars['Int']>;
  action_by_in?: Maybe<Scalars['String']>;
  action_by_nin?: Maybe<Scalars['String']>;
  action_by_between?: Maybe<Scalars['String']>;
  action_by_nbetween?: Maybe<Scalars['String']>;
  action_on_eq?: Maybe<Scalars['Datetime']>;
  action_on_neq?: Maybe<Scalars['Datetime']>;
  action_on_lt?: Maybe<Scalars['Datetime']>;
  action_on_lte?: Maybe<Scalars['Datetime']>;
  action_on_gt?: Maybe<Scalars['Datetime']>;
  action_on_gte?: Maybe<Scalars['Datetime']>;
  action_on_in?: Maybe<Scalars['Datetime']>;
  action_on_nin?: Maybe<Scalars['Datetime']>;
  action_on_between?: Maybe<Scalars['String']>;
  action_on_nbetween?: Maybe<Scalars['String']>;
  ip_eq?: Maybe<Scalars['String']>;
  ip_neq?: Maybe<Scalars['String']>;
  ip_contains?: Maybe<Scalars['String']>;
  ip_ncontains?: Maybe<Scalars['String']>;
  ip_rlike?: Maybe<Scalars['String']>;
  ip_nrlike?: Maybe<Scalars['String']>;
  ip_empty?: Maybe<Scalars['String']>;
  ip_nempty?: Maybe<Scalars['String']>;
  ip_null?: Maybe<Scalars['String']>;
  ip_nnull?: Maybe<Scalars['String']>;
  user_agent_eq?: Maybe<Scalars['String']>;
  user_agent_neq?: Maybe<Scalars['String']>;
  user_agent_contains?: Maybe<Scalars['String']>;
  user_agent_ncontains?: Maybe<Scalars['String']>;
  user_agent_rlike?: Maybe<Scalars['String']>;
  user_agent_nrlike?: Maybe<Scalars['String']>;
  user_agent_empty?: Maybe<Scalars['String']>;
  user_agent_nempty?: Maybe<Scalars['String']>;
  user_agent_null?: Maybe<Scalars['String']>;
  user_agent_nnull?: Maybe<Scalars['String']>;
  collection_eq?: Maybe<Scalars['String']>;
  collection_neq?: Maybe<Scalars['String']>;
  collection_contains?: Maybe<Scalars['String']>;
  collection_ncontains?: Maybe<Scalars['String']>;
  collection_rlike?: Maybe<Scalars['String']>;
  collection_nrlike?: Maybe<Scalars['String']>;
  collection_empty?: Maybe<Scalars['String']>;
  collection_nempty?: Maybe<Scalars['String']>;
  collection_null?: Maybe<Scalars['String']>;
  collection_nnull?: Maybe<Scalars['String']>;
  item_eq?: Maybe<Scalars['String']>;
  item_neq?: Maybe<Scalars['String']>;
  item_contains?: Maybe<Scalars['String']>;
  item_ncontains?: Maybe<Scalars['String']>;
  item_rlike?: Maybe<Scalars['String']>;
  item_nrlike?: Maybe<Scalars['String']>;
  item_empty?: Maybe<Scalars['String']>;
  item_nempty?: Maybe<Scalars['String']>;
  item_null?: Maybe<Scalars['String']>;
  item_nnull?: Maybe<Scalars['String']>;
  edited_on_eq?: Maybe<Scalars['Datetime']>;
  edited_on_neq?: Maybe<Scalars['Datetime']>;
  edited_on_lt?: Maybe<Scalars['Datetime']>;
  edited_on_lte?: Maybe<Scalars['Datetime']>;
  edited_on_gt?: Maybe<Scalars['Datetime']>;
  edited_on_gte?: Maybe<Scalars['Datetime']>;
  edited_on_in?: Maybe<Scalars['Datetime']>;
  edited_on_nin?: Maybe<Scalars['Datetime']>;
  edited_on_between?: Maybe<Scalars['String']>;
  edited_on_nbetween?: Maybe<Scalars['String']>;
  comment_eq?: Maybe<Scalars['String']>;
  comment_neq?: Maybe<Scalars['String']>;
  comment_contains?: Maybe<Scalars['String']>;
  comment_ncontains?: Maybe<Scalars['String']>;
  comment_rlike?: Maybe<Scalars['String']>;
  comment_nrlike?: Maybe<Scalars['String']>;
  comment_empty?: Maybe<Scalars['String']>;
  comment_nempty?: Maybe<Scalars['String']>;
  comment_null?: Maybe<Scalars['String']>;
  comment_nnull?: Maybe<Scalars['String']>;
  comment_deleted_on_eq?: Maybe<Scalars['Datetime']>;
  comment_deleted_on_neq?: Maybe<Scalars['Datetime']>;
  comment_deleted_on_lt?: Maybe<Scalars['Datetime']>;
  comment_deleted_on_lte?: Maybe<Scalars['Datetime']>;
  comment_deleted_on_gt?: Maybe<Scalars['Datetime']>;
  comment_deleted_on_gte?: Maybe<Scalars['Datetime']>;
  comment_deleted_on_in?: Maybe<Scalars['Datetime']>;
  comment_deleted_on_nin?: Maybe<Scalars['Datetime']>;
  comment_deleted_on_between?: Maybe<Scalars['String']>;
  comment_deleted_on_nbetween?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<DirectusActivityFilter>>>;
  and?: Maybe<Array<Maybe<DirectusActivityFilter>>>;
};

export type DirectusActivityItem = {
  __typename?: 'DirectusActivityItem';
  id?: Maybe<Scalars['ID']>;
  action?: Maybe<Scalars['String']>;
  collection?: Maybe<Scalars['String']>;
  item?: Maybe<Scalars['String']>;
  action_by?: Maybe<DirectusUserItem>;
  action_on?: Maybe<Scalars['Datetime']>;
  edited_on?: Maybe<Scalars['Datetime']>;
  comment_deleted_on?: Maybe<Scalars['Datetime']>;
  ip?: Maybe<Scalars['String']>;
  user_agent?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type DirectusCollection = {
  __typename?: 'DirectusCollection';
  data?: Maybe<Array<Maybe<DirectusCollectionItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusCollectionItem = {
  __typename?: 'DirectusCollectionItem';
  collection?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<DirectusFieldItem>>>;
  note?: Maybe<Scalars['String']>;
  managed?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  single?: Maybe<Scalars['Boolean']>;
  translation?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type DirectusCollectionPreset = {
  __typename?: 'DirectusCollectionPreset';
  data?: Maybe<Array<Maybe<DirectusCollectionPresetItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusCollectionPresetItem = {
  __typename?: 'DirectusCollectionPresetItem';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  collection?: Maybe<Scalars['String']>;
  search_query?: Maybe<Scalars['String']>;
  filters?: Maybe<Scalars['JSON']>;
  view_options?: Maybe<Scalars['JSON']>;
  view_type?: Maybe<Scalars['String']>;
  view_query?: Maybe<Scalars['JSON']>;
  translation?: Maybe<Scalars['String']>;
};

export type DirectusCollectionPresetsFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  title_eq?: Maybe<Scalars['String']>;
  title_neq?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ncontains?: Maybe<Scalars['String']>;
  title_rlike?: Maybe<Scalars['String']>;
  title_nrlike?: Maybe<Scalars['String']>;
  title_empty?: Maybe<Scalars['String']>;
  title_nempty?: Maybe<Scalars['String']>;
  title_null?: Maybe<Scalars['String']>;
  title_nnull?: Maybe<Scalars['String']>;
  user_eq?: Maybe<Scalars['Int']>;
  user_neq?: Maybe<Scalars['Int']>;
  user_lt?: Maybe<Scalars['Int']>;
  user_lte?: Maybe<Scalars['Int']>;
  user_gt?: Maybe<Scalars['Int']>;
  user_gte?: Maybe<Scalars['Int']>;
  user_in?: Maybe<Scalars['String']>;
  user_nin?: Maybe<Scalars['String']>;
  user_between?: Maybe<Scalars['String']>;
  user_nbetween?: Maybe<Scalars['String']>;
  role_eq?: Maybe<Scalars['Int']>;
  role_neq?: Maybe<Scalars['Int']>;
  role_in?: Maybe<Scalars['String']>;
  role_nin?: Maybe<Scalars['String']>;
  role_contains?: Maybe<Scalars['String']>;
  role_ncontains?: Maybe<Scalars['String']>;
  role_rlike?: Maybe<Scalars['String']>;
  role_nrlike?: Maybe<Scalars['String']>;
  collection_eq?: Maybe<Scalars['Int']>;
  collection_neq?: Maybe<Scalars['Int']>;
  collection_in?: Maybe<Scalars['String']>;
  collection_nin?: Maybe<Scalars['String']>;
  collection_contains?: Maybe<Scalars['String']>;
  collection_ncontains?: Maybe<Scalars['String']>;
  collection_rlike?: Maybe<Scalars['String']>;
  collection_nrlike?: Maybe<Scalars['String']>;
  search_query_eq?: Maybe<Scalars['String']>;
  search_query_neq?: Maybe<Scalars['String']>;
  search_query_contains?: Maybe<Scalars['String']>;
  search_query_ncontains?: Maybe<Scalars['String']>;
  search_query_rlike?: Maybe<Scalars['String']>;
  search_query_nrlike?: Maybe<Scalars['String']>;
  search_query_empty?: Maybe<Scalars['String']>;
  search_query_nempty?: Maybe<Scalars['String']>;
  search_query_null?: Maybe<Scalars['String']>;
  search_query_nnull?: Maybe<Scalars['String']>;
  filters_all?: Maybe<Scalars['String']>;
  filters_has?: Maybe<Scalars['String']>;
  view_type_eq?: Maybe<Scalars['String']>;
  view_type_neq?: Maybe<Scalars['String']>;
  view_type_contains?: Maybe<Scalars['String']>;
  view_type_ncontains?: Maybe<Scalars['String']>;
  view_type_rlike?: Maybe<Scalars['String']>;
  view_type_nrlike?: Maybe<Scalars['String']>;
  view_type_empty?: Maybe<Scalars['String']>;
  view_type_nempty?: Maybe<Scalars['String']>;
  view_type_null?: Maybe<Scalars['String']>;
  view_type_nnull?: Maybe<Scalars['String']>;
  view_query_all?: Maybe<Scalars['String']>;
  view_query_has?: Maybe<Scalars['String']>;
  view_options_all?: Maybe<Scalars['String']>;
  view_options_has?: Maybe<Scalars['String']>;
  translation_eq?: Maybe<Scalars['String']>;
  translation_neq?: Maybe<Scalars['String']>;
  translation_contains?: Maybe<Scalars['String']>;
  translation_ncontains?: Maybe<Scalars['String']>;
  translation_rlike?: Maybe<Scalars['String']>;
  translation_nrlike?: Maybe<Scalars['String']>;
  translation_empty?: Maybe<Scalars['String']>;
  translation_nempty?: Maybe<Scalars['String']>;
  translation_null?: Maybe<Scalars['String']>;
  translation_nnull?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<DirectusCollectionPresetsFilter>>>;
  and?: Maybe<Array<Maybe<DirectusCollectionPresetsFilter>>>;
};

export type DirectusField = {
  __typename?: 'DirectusField';
  data?: Maybe<Array<Maybe<DirectusFieldItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusFieldItem = {
  __typename?: 'DirectusFieldItem';
  collection?: Maybe<DirectusCollectionItem>;
  field?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  interface?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['JSON']>;
  locked?: Maybe<Scalars['Boolean']>;
  translation?: Maybe<Scalars['JSON']>;
  readonly?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  validation?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['Int']>;
  hidden_browse?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type DirectusFile = {
  __typename?: 'DirectusFile';
  data?: Maybe<Array<Maybe<DirectusFileItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusFileItem = {
  __typename?: 'DirectusFileItem';
  id?: Maybe<Scalars['ID']>;
  filename_disk?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  filesize?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  charset?: Maybe<Scalars['String']>;
  embed?: Maybe<Scalars['String']>;
  storage?: Maybe<Scalars['String']>;
  full_url?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  thumbnails?: Maybe<Array<Maybe<DirectusFileThumbnailItem>>>;
  uploaded_on?: Maybe<Scalars['Datetime']>;
  uploaded_by?: Maybe<DirectusUserItem>;
  checksum?: Maybe<Scalars['String']>;
};

export type DirectusFilesFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  storage_eq?: Maybe<Scalars['String']>;
  storage_neq?: Maybe<Scalars['String']>;
  storage_contains?: Maybe<Scalars['String']>;
  storage_ncontains?: Maybe<Scalars['String']>;
  storage_rlike?: Maybe<Scalars['String']>;
  storage_nrlike?: Maybe<Scalars['String']>;
  storage_empty?: Maybe<Scalars['String']>;
  storage_nempty?: Maybe<Scalars['String']>;
  storage_null?: Maybe<Scalars['String']>;
  storage_nnull?: Maybe<Scalars['String']>;
  private_hash_eq?: Maybe<Scalars['String']>;
  private_hash_neq?: Maybe<Scalars['String']>;
  private_hash_contains?: Maybe<Scalars['String']>;
  private_hash_ncontains?: Maybe<Scalars['String']>;
  private_hash_rlike?: Maybe<Scalars['String']>;
  private_hash_nrlike?: Maybe<Scalars['String']>;
  private_hash_empty?: Maybe<Scalars['String']>;
  private_hash_nempty?: Maybe<Scalars['String']>;
  private_hash_null?: Maybe<Scalars['String']>;
  private_hash_nnull?: Maybe<Scalars['String']>;
  filename_disk_eq?: Maybe<Scalars['String']>;
  filename_disk_neq?: Maybe<Scalars['String']>;
  filename_disk_contains?: Maybe<Scalars['String']>;
  filename_disk_ncontains?: Maybe<Scalars['String']>;
  filename_disk_rlike?: Maybe<Scalars['String']>;
  filename_disk_nrlike?: Maybe<Scalars['String']>;
  filename_disk_empty?: Maybe<Scalars['String']>;
  filename_disk_nempty?: Maybe<Scalars['String']>;
  filename_disk_null?: Maybe<Scalars['String']>;
  filename_disk_nnull?: Maybe<Scalars['String']>;
  filename_download_eq?: Maybe<Scalars['String']>;
  filename_download_neq?: Maybe<Scalars['String']>;
  filename_download_contains?: Maybe<Scalars['String']>;
  filename_download_ncontains?: Maybe<Scalars['String']>;
  filename_download_rlike?: Maybe<Scalars['String']>;
  filename_download_nrlike?: Maybe<Scalars['String']>;
  filename_download_empty?: Maybe<Scalars['String']>;
  filename_download_nempty?: Maybe<Scalars['String']>;
  filename_download_null?: Maybe<Scalars['String']>;
  filename_download_nnull?: Maybe<Scalars['String']>;
  title_eq?: Maybe<Scalars['String']>;
  title_neq?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ncontains?: Maybe<Scalars['String']>;
  title_rlike?: Maybe<Scalars['String']>;
  title_nrlike?: Maybe<Scalars['String']>;
  title_empty?: Maybe<Scalars['String']>;
  title_nempty?: Maybe<Scalars['String']>;
  title_null?: Maybe<Scalars['String']>;
  title_nnull?: Maybe<Scalars['String']>;
  type_eq?: Maybe<Scalars['String']>;
  type_neq?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_ncontains?: Maybe<Scalars['String']>;
  type_rlike?: Maybe<Scalars['String']>;
  type_nrlike?: Maybe<Scalars['String']>;
  type_empty?: Maybe<Scalars['String']>;
  type_nempty?: Maybe<Scalars['String']>;
  type_null?: Maybe<Scalars['String']>;
  type_nnull?: Maybe<Scalars['String']>;
  uploaded_by_eq?: Maybe<Scalars['Int']>;
  uploaded_by_neq?: Maybe<Scalars['Int']>;
  uploaded_by_in?: Maybe<Scalars['String']>;
  uploaded_by_nin?: Maybe<Scalars['String']>;
  uploaded_on_eq?: Maybe<Scalars['Datetime']>;
  uploaded_on_neq?: Maybe<Scalars['Datetime']>;
  uploaded_on_lt?: Maybe<Scalars['Datetime']>;
  uploaded_on_lte?: Maybe<Scalars['Datetime']>;
  uploaded_on_gt?: Maybe<Scalars['Datetime']>;
  uploaded_on_gte?: Maybe<Scalars['Datetime']>;
  uploaded_on_in?: Maybe<Scalars['Datetime']>;
  uploaded_on_nin?: Maybe<Scalars['Datetime']>;
  uploaded_on_between?: Maybe<Scalars['String']>;
  uploaded_on_nbetween?: Maybe<Scalars['String']>;
  charset_eq?: Maybe<Scalars['String']>;
  charset_neq?: Maybe<Scalars['String']>;
  charset_contains?: Maybe<Scalars['String']>;
  charset_ncontains?: Maybe<Scalars['String']>;
  charset_rlike?: Maybe<Scalars['String']>;
  charset_nrlike?: Maybe<Scalars['String']>;
  charset_empty?: Maybe<Scalars['String']>;
  charset_nempty?: Maybe<Scalars['String']>;
  charset_null?: Maybe<Scalars['String']>;
  charset_nnull?: Maybe<Scalars['String']>;
  filesize_eq?: Maybe<Scalars['Int']>;
  filesize_neq?: Maybe<Scalars['Int']>;
  filesize_lt?: Maybe<Scalars['Int']>;
  filesize_lte?: Maybe<Scalars['Int']>;
  filesize_gt?: Maybe<Scalars['Int']>;
  filesize_gte?: Maybe<Scalars['Int']>;
  filesize_in?: Maybe<Scalars['String']>;
  filesize_nin?: Maybe<Scalars['String']>;
  filesize_between?: Maybe<Scalars['String']>;
  filesize_nbetween?: Maybe<Scalars['String']>;
  width_eq?: Maybe<Scalars['Int']>;
  width_neq?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Scalars['String']>;
  width_nin?: Maybe<Scalars['String']>;
  width_between?: Maybe<Scalars['String']>;
  width_nbetween?: Maybe<Scalars['String']>;
  height_eq?: Maybe<Scalars['Int']>;
  height_neq?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Scalars['String']>;
  height_nin?: Maybe<Scalars['String']>;
  height_between?: Maybe<Scalars['String']>;
  height_nbetween?: Maybe<Scalars['String']>;
  duration_eq?: Maybe<Scalars['Int']>;
  duration_neq?: Maybe<Scalars['Int']>;
  duration_lt?: Maybe<Scalars['Int']>;
  duration_lte?: Maybe<Scalars['Int']>;
  duration_gt?: Maybe<Scalars['Int']>;
  duration_gte?: Maybe<Scalars['Int']>;
  duration_in?: Maybe<Scalars['String']>;
  duration_nin?: Maybe<Scalars['String']>;
  duration_between?: Maybe<Scalars['String']>;
  duration_nbetween?: Maybe<Scalars['String']>;
  embed_eq?: Maybe<Scalars['String']>;
  embed_neq?: Maybe<Scalars['String']>;
  embed_contains?: Maybe<Scalars['String']>;
  embed_ncontains?: Maybe<Scalars['String']>;
  embed_rlike?: Maybe<Scalars['String']>;
  embed_nrlike?: Maybe<Scalars['String']>;
  embed_empty?: Maybe<Scalars['String']>;
  embed_nempty?: Maybe<Scalars['String']>;
  embed_null?: Maybe<Scalars['String']>;
  embed_nnull?: Maybe<Scalars['String']>;
  folder_eq?: Maybe<Scalars['Int']>;
  folder_neq?: Maybe<Scalars['Int']>;
  folder_in?: Maybe<Scalars['String']>;
  folder_nin?: Maybe<Scalars['String']>;
  folder_contains?: Maybe<Scalars['String']>;
  folder_ncontains?: Maybe<Scalars['String']>;
  folder_rlike?: Maybe<Scalars['String']>;
  folder_nrlike?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ncontains?: Maybe<Scalars['String']>;
  description_rlike?: Maybe<Scalars['String']>;
  description_nrlike?: Maybe<Scalars['String']>;
  description_empty?: Maybe<Scalars['String']>;
  description_nempty?: Maybe<Scalars['String']>;
  description_null?: Maybe<Scalars['String']>;
  description_nnull?: Maybe<Scalars['String']>;
  location_eq?: Maybe<Scalars['String']>;
  location_neq?: Maybe<Scalars['String']>;
  location_contains?: Maybe<Scalars['String']>;
  location_ncontains?: Maybe<Scalars['String']>;
  location_rlike?: Maybe<Scalars['String']>;
  location_nrlike?: Maybe<Scalars['String']>;
  location_empty?: Maybe<Scalars['String']>;
  location_nempty?: Maybe<Scalars['String']>;
  location_null?: Maybe<Scalars['String']>;
  location_nnull?: Maybe<Scalars['String']>;
  tags_all?: Maybe<Scalars['String']>;
  tags_has?: Maybe<Scalars['String']>;
  checksum_eq?: Maybe<Scalars['String']>;
  checksum_neq?: Maybe<Scalars['String']>;
  checksum_contains?: Maybe<Scalars['String']>;
  checksum_ncontains?: Maybe<Scalars['String']>;
  checksum_rlike?: Maybe<Scalars['String']>;
  checksum_nrlike?: Maybe<Scalars['String']>;
  checksum_empty?: Maybe<Scalars['String']>;
  checksum_nempty?: Maybe<Scalars['String']>;
  checksum_null?: Maybe<Scalars['String']>;
  checksum_nnull?: Maybe<Scalars['String']>;
  metadata_all?: Maybe<Scalars['String']>;
  metadata_has?: Maybe<Scalars['String']>;
  data_all?: Maybe<Scalars['String']>;
  data_has?: Maybe<Scalars['String']>;
  preview_all?: Maybe<Scalars['String']>;
  preview_has?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<DirectusFilesFilter>>>;
  and?: Maybe<Array<Maybe<DirectusFilesFilter>>>;
};

export type DirectusFileThumbnailItem = {
  __typename?: 'DirectusFileThumbnailItem';
  url?: Maybe<Scalars['String']>;
  relative_url?: Maybe<Scalars['String']>;
  dimension?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type DirectusFolder = {
  __typename?: 'DirectusFolder';
  data?: Maybe<Array<Maybe<DirectusFolderItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusFolderItem = {
  __typename?: 'DirectusFolderItem';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parent_folder?: Maybe<Scalars['String']>;
};

export type DirectusFoldersFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ncontains?: Maybe<Scalars['String']>;
  name_rlike?: Maybe<Scalars['String']>;
  name_nrlike?: Maybe<Scalars['String']>;
  name_empty?: Maybe<Scalars['String']>;
  name_nempty?: Maybe<Scalars['String']>;
  name_null?: Maybe<Scalars['String']>;
  name_nnull?: Maybe<Scalars['String']>;
  parent_folder_eq?: Maybe<Scalars['Int']>;
  parent_folder_neq?: Maybe<Scalars['Int']>;
  parent_folder_in?: Maybe<Scalars['String']>;
  parent_folder_nin?: Maybe<Scalars['String']>;
  parent_folder_contains?: Maybe<Scalars['String']>;
  parent_folder_ncontains?: Maybe<Scalars['String']>;
  parent_folder_rlike?: Maybe<Scalars['String']>;
  parent_folder_nrlike?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<DirectusFoldersFilter>>>;
  and?: Maybe<Array<Maybe<DirectusFoldersFilter>>>;
};

export type DirectusPermission = {
  __typename?: 'DirectusPermission';
  data?: Maybe<Array<Maybe<DirectusPermissionItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusPermissionItem = {
  __typename?: 'DirectusPermissionItem';
  id?: Maybe<Scalars['ID']>;
  collection?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['String']>;
  delete?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  explain?: Maybe<Scalars['String']>;
  status_blacklist?: Maybe<Array<Maybe<Scalars['String']>>>;
  read_field_blacklist?: Maybe<Array<Maybe<Scalars['String']>>>;
  write_field_blacklist?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DirectusPermissionsFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  collection_eq?: Maybe<Scalars['Int']>;
  collection_neq?: Maybe<Scalars['Int']>;
  collection_in?: Maybe<Scalars['String']>;
  collection_nin?: Maybe<Scalars['String']>;
  collection_contains?: Maybe<Scalars['String']>;
  collection_ncontains?: Maybe<Scalars['String']>;
  collection_rlike?: Maybe<Scalars['String']>;
  collection_nrlike?: Maybe<Scalars['String']>;
  role_eq?: Maybe<Scalars['Int']>;
  role_neq?: Maybe<Scalars['Int']>;
  role_in?: Maybe<Scalars['String']>;
  role_nin?: Maybe<Scalars['String']>;
  role_contains?: Maybe<Scalars['String']>;
  role_ncontains?: Maybe<Scalars['String']>;
  role_rlike?: Maybe<Scalars['String']>;
  role_nrlike?: Maybe<Scalars['String']>;
  status_eq?: Maybe<Scalars['String']>;
  status_neq?: Maybe<Scalars['String']>;
  status_contains?: Maybe<Scalars['String']>;
  status_ncontains?: Maybe<Scalars['String']>;
  status_rlike?: Maybe<Scalars['String']>;
  status_nrlike?: Maybe<Scalars['String']>;
  status_empty?: Maybe<Scalars['String']>;
  status_nempty?: Maybe<Scalars['String']>;
  status_null?: Maybe<Scalars['String']>;
  status_nnull?: Maybe<Scalars['String']>;
  create_eq?: Maybe<Scalars['String']>;
  create_neq?: Maybe<Scalars['String']>;
  create_contains?: Maybe<Scalars['String']>;
  create_ncontains?: Maybe<Scalars['String']>;
  create_rlike?: Maybe<Scalars['String']>;
  create_nrlike?: Maybe<Scalars['String']>;
  create_empty?: Maybe<Scalars['String']>;
  create_nempty?: Maybe<Scalars['String']>;
  create_null?: Maybe<Scalars['String']>;
  create_nnull?: Maybe<Scalars['String']>;
  read_eq?: Maybe<Scalars['String']>;
  read_neq?: Maybe<Scalars['String']>;
  read_contains?: Maybe<Scalars['String']>;
  read_ncontains?: Maybe<Scalars['String']>;
  read_rlike?: Maybe<Scalars['String']>;
  read_nrlike?: Maybe<Scalars['String']>;
  read_empty?: Maybe<Scalars['String']>;
  read_nempty?: Maybe<Scalars['String']>;
  read_null?: Maybe<Scalars['String']>;
  read_nnull?: Maybe<Scalars['String']>;
  update_eq?: Maybe<Scalars['String']>;
  update_neq?: Maybe<Scalars['String']>;
  update_contains?: Maybe<Scalars['String']>;
  update_ncontains?: Maybe<Scalars['String']>;
  update_rlike?: Maybe<Scalars['String']>;
  update_nrlike?: Maybe<Scalars['String']>;
  update_empty?: Maybe<Scalars['String']>;
  update_nempty?: Maybe<Scalars['String']>;
  update_null?: Maybe<Scalars['String']>;
  update_nnull?: Maybe<Scalars['String']>;
  delete_eq?: Maybe<Scalars['String']>;
  delete_neq?: Maybe<Scalars['String']>;
  delete_contains?: Maybe<Scalars['String']>;
  delete_ncontains?: Maybe<Scalars['String']>;
  delete_rlike?: Maybe<Scalars['String']>;
  delete_nrlike?: Maybe<Scalars['String']>;
  delete_empty?: Maybe<Scalars['String']>;
  delete_nempty?: Maybe<Scalars['String']>;
  delete_null?: Maybe<Scalars['String']>;
  delete_nnull?: Maybe<Scalars['String']>;
  comment_eq?: Maybe<Scalars['String']>;
  comment_neq?: Maybe<Scalars['String']>;
  comment_contains?: Maybe<Scalars['String']>;
  comment_ncontains?: Maybe<Scalars['String']>;
  comment_rlike?: Maybe<Scalars['String']>;
  comment_nrlike?: Maybe<Scalars['String']>;
  comment_empty?: Maybe<Scalars['String']>;
  comment_nempty?: Maybe<Scalars['String']>;
  comment_null?: Maybe<Scalars['String']>;
  comment_nnull?: Maybe<Scalars['String']>;
  explain_eq?: Maybe<Scalars['String']>;
  explain_neq?: Maybe<Scalars['String']>;
  explain_contains?: Maybe<Scalars['String']>;
  explain_ncontains?: Maybe<Scalars['String']>;
  explain_rlike?: Maybe<Scalars['String']>;
  explain_nrlike?: Maybe<Scalars['String']>;
  explain_empty?: Maybe<Scalars['String']>;
  explain_nempty?: Maybe<Scalars['String']>;
  explain_null?: Maybe<Scalars['String']>;
  explain_nnull?: Maybe<Scalars['String']>;
  read_field_blacklist_all?: Maybe<Scalars['String']>;
  read_field_blacklist_has?: Maybe<Scalars['String']>;
  write_field_blacklist_all?: Maybe<Scalars['String']>;
  write_field_blacklist_has?: Maybe<Scalars['String']>;
  status_blacklist_all?: Maybe<Scalars['String']>;
  status_blacklist_has?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<DirectusPermissionsFilter>>>;
  and?: Maybe<Array<Maybe<DirectusPermissionsFilter>>>;
};

export type DirectusRelation = {
  __typename?: 'DirectusRelation';
  data?: Maybe<Array<Maybe<DirectusRelationItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusRelationItem = {
  __typename?: 'DirectusRelationItem';
  id?: Maybe<Scalars['ID']>;
  collection_many?: Maybe<Scalars['String']>;
  field_many?: Maybe<Scalars['String']>;
  collection_one?: Maybe<Scalars['String']>;
  field_one?: Maybe<Scalars['String']>;
  junction_field?: Maybe<Scalars['String']>;
};

export type DirectusRevision = {
  __typename?: 'DirectusRevision';
  data?: Maybe<Array<Maybe<DirectusRevisionItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusRevisionItem = {
  __typename?: 'DirectusRevisionItem';
  id?: Maybe<Scalars['ID']>;
  activity?: Maybe<DirectusActivityItem>;
  collection?: Maybe<Scalars['String']>;
  item?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  delta?: Maybe<Scalars['JSON']>;
  parent_item?: Maybe<Scalars['String']>;
  parent_collection?: Maybe<Scalars['String']>;
  parent_changed?: Maybe<Scalars['Boolean']>;
};

export type DirectusRole = {
  __typename?: 'DirectusRole';
  data?: Maybe<Array<Maybe<DirectusRoleItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusRoleItem = {
  __typename?: 'DirectusRoleItem';
  id?: Maybe<Scalars['ID']>;
  external_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ip_whitelist?: Maybe<Scalars['String']>;
  nav_blacklist?: Maybe<Scalars['Boolean']>;
  users?: Maybe<Array<Maybe<DirectusUserItem>>>;
};

export type DirectusSetting = {
  __typename?: 'DirectusSetting';
  data?: Maybe<Array<Maybe<DirectusSettingItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusSettingItem = {
  __typename?: 'DirectusSettingItem';
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type DirectusUser = {
  __typename?: 'DirectusUser';
  data?: Maybe<Array<Maybe<DirectusUserItem>>>;
  meta?: Maybe<Metadata>;
};

export type DirectusUserItem = {
  __typename?: 'DirectusUserItem';
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  high_contrast_mode?: Maybe<Scalars['Boolean']>;
  locale_options?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  last_access_on?: Maybe<Scalars['Datetime']>;
  last_page?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  external_id?: Maybe<Scalars['String']>;
  avatar?: Maybe<DirectusFileItem>;
  roles?: Maybe<Array<Maybe<DirectusRoleItem>>>;
};

export type DirectusUsersFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  status_eq?: Maybe<Scalars['String']>;
  status_neq?: Maybe<Scalars['String']>;
  status_in?: Maybe<Scalars['String']>;
  status_nin?: Maybe<Scalars['String']>;
  role_eq?: Maybe<Scalars['Int']>;
  role_neq?: Maybe<Scalars['Int']>;
  role_in?: Maybe<Scalars['String']>;
  role_nin?: Maybe<Scalars['String']>;
  role_contains?: Maybe<Scalars['String']>;
  role_ncontains?: Maybe<Scalars['String']>;
  role_rlike?: Maybe<Scalars['String']>;
  role_nrlike?: Maybe<Scalars['String']>;
  first_name_eq?: Maybe<Scalars['String']>;
  first_name_neq?: Maybe<Scalars['String']>;
  first_name_contains?: Maybe<Scalars['String']>;
  first_name_ncontains?: Maybe<Scalars['String']>;
  first_name_rlike?: Maybe<Scalars['String']>;
  first_name_nrlike?: Maybe<Scalars['String']>;
  first_name_empty?: Maybe<Scalars['String']>;
  first_name_nempty?: Maybe<Scalars['String']>;
  first_name_null?: Maybe<Scalars['String']>;
  first_name_nnull?: Maybe<Scalars['String']>;
  last_name_eq?: Maybe<Scalars['String']>;
  last_name_neq?: Maybe<Scalars['String']>;
  last_name_contains?: Maybe<Scalars['String']>;
  last_name_ncontains?: Maybe<Scalars['String']>;
  last_name_rlike?: Maybe<Scalars['String']>;
  last_name_nrlike?: Maybe<Scalars['String']>;
  last_name_empty?: Maybe<Scalars['String']>;
  last_name_nempty?: Maybe<Scalars['String']>;
  last_name_null?: Maybe<Scalars['String']>;
  last_name_nnull?: Maybe<Scalars['String']>;
  email_eq?: Maybe<Scalars['String']>;
  email_neq?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_ncontains?: Maybe<Scalars['String']>;
  email_rlike?: Maybe<Scalars['String']>;
  email_nrlike?: Maybe<Scalars['String']>;
  email_empty?: Maybe<Scalars['String']>;
  email_nempty?: Maybe<Scalars['String']>;
  email_null?: Maybe<Scalars['String']>;
  email_nnull?: Maybe<Scalars['String']>;
  password_all?: Maybe<Scalars['String']>;
  password_has?: Maybe<Scalars['String']>;
  token_eq?: Maybe<Scalars['String']>;
  token_neq?: Maybe<Scalars['String']>;
  token_contains?: Maybe<Scalars['String']>;
  token_ncontains?: Maybe<Scalars['String']>;
  token_rlike?: Maybe<Scalars['String']>;
  token_nrlike?: Maybe<Scalars['String']>;
  token_empty?: Maybe<Scalars['String']>;
  token_nempty?: Maybe<Scalars['String']>;
  token_null?: Maybe<Scalars['String']>;
  token_nnull?: Maybe<Scalars['String']>;
  timezone_eq?: Maybe<Scalars['String']>;
  timezone_neq?: Maybe<Scalars['String']>;
  timezone_contains?: Maybe<Scalars['String']>;
  timezone_ncontains?: Maybe<Scalars['String']>;
  timezone_rlike?: Maybe<Scalars['String']>;
  timezone_nrlike?: Maybe<Scalars['String']>;
  timezone_empty?: Maybe<Scalars['String']>;
  timezone_nempty?: Maybe<Scalars['String']>;
  timezone_null?: Maybe<Scalars['String']>;
  timezone_nnull?: Maybe<Scalars['String']>;
  locale_eq?: Maybe<Scalars['String']>;
  locale_neq?: Maybe<Scalars['String']>;
  locale_contains?: Maybe<Scalars['String']>;
  locale_ncontains?: Maybe<Scalars['String']>;
  locale_rlike?: Maybe<Scalars['String']>;
  locale_nrlike?: Maybe<Scalars['String']>;
  locale_empty?: Maybe<Scalars['String']>;
  locale_nempty?: Maybe<Scalars['String']>;
  locale_null?: Maybe<Scalars['String']>;
  locale_nnull?: Maybe<Scalars['String']>;
  locale_options_all?: Maybe<Scalars['String']>;
  locale_options_has?: Maybe<Scalars['String']>;
  avatar_all?: Maybe<Scalars['String']>;
  avatar_has?: Maybe<Scalars['String']>;
  company_eq?: Maybe<Scalars['String']>;
  company_neq?: Maybe<Scalars['String']>;
  company_contains?: Maybe<Scalars['String']>;
  company_ncontains?: Maybe<Scalars['String']>;
  company_rlike?: Maybe<Scalars['String']>;
  company_nrlike?: Maybe<Scalars['String']>;
  company_empty?: Maybe<Scalars['String']>;
  company_nempty?: Maybe<Scalars['String']>;
  company_null?: Maybe<Scalars['String']>;
  company_nnull?: Maybe<Scalars['String']>;
  title_eq?: Maybe<Scalars['String']>;
  title_neq?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ncontains?: Maybe<Scalars['String']>;
  title_rlike?: Maybe<Scalars['String']>;
  title_nrlike?: Maybe<Scalars['String']>;
  title_empty?: Maybe<Scalars['String']>;
  title_nempty?: Maybe<Scalars['String']>;
  title_null?: Maybe<Scalars['String']>;
  title_nnull?: Maybe<Scalars['String']>;
  email_notifications_eq?: Maybe<Scalars['Boolean']>;
  last_access_on_eq?: Maybe<Scalars['Datetime']>;
  last_access_on_neq?: Maybe<Scalars['Datetime']>;
  last_access_on_lt?: Maybe<Scalars['Datetime']>;
  last_access_on_lte?: Maybe<Scalars['Datetime']>;
  last_access_on_gt?: Maybe<Scalars['Datetime']>;
  last_access_on_gte?: Maybe<Scalars['Datetime']>;
  last_access_on_in?: Maybe<Scalars['Datetime']>;
  last_access_on_nin?: Maybe<Scalars['Datetime']>;
  last_access_on_between?: Maybe<Scalars['String']>;
  last_access_on_nbetween?: Maybe<Scalars['String']>;
  last_page_eq?: Maybe<Scalars['String']>;
  last_page_neq?: Maybe<Scalars['String']>;
  last_page_contains?: Maybe<Scalars['String']>;
  last_page_ncontains?: Maybe<Scalars['String']>;
  last_page_rlike?: Maybe<Scalars['String']>;
  last_page_nrlike?: Maybe<Scalars['String']>;
  last_page_empty?: Maybe<Scalars['String']>;
  last_page_nempty?: Maybe<Scalars['String']>;
  last_page_null?: Maybe<Scalars['String']>;
  last_page_nnull?: Maybe<Scalars['String']>;
  external_id_eq?: Maybe<Scalars['String']>;
  external_id_neq?: Maybe<Scalars['String']>;
  external_id_contains?: Maybe<Scalars['String']>;
  external_id_ncontains?: Maybe<Scalars['String']>;
  external_id_rlike?: Maybe<Scalars['String']>;
  external_id_nrlike?: Maybe<Scalars['String']>;
  external_id_empty?: Maybe<Scalars['String']>;
  external_id_nempty?: Maybe<Scalars['String']>;
  external_id_null?: Maybe<Scalars['String']>;
  external_id_nnull?: Maybe<Scalars['String']>;
  theme_eq?: Maybe<Scalars['String']>;
  theme_neq?: Maybe<Scalars['String']>;
  theme_contains?: Maybe<Scalars['String']>;
  theme_ncontains?: Maybe<Scalars['String']>;
  theme_rlike?: Maybe<Scalars['String']>;
  theme_nrlike?: Maybe<Scalars['String']>;
  theme_empty?: Maybe<Scalars['String']>;
  theme_nempty?: Maybe<Scalars['String']>;
  theme_null?: Maybe<Scalars['String']>;
  theme_nnull?: Maybe<Scalars['String']>;
  fa_secret_eq?: Maybe<Scalars['String']>;
  fa_secret_neq?: Maybe<Scalars['String']>;
  fa_secret_contains?: Maybe<Scalars['String']>;
  fa_secret_ncontains?: Maybe<Scalars['String']>;
  fa_secret_rlike?: Maybe<Scalars['String']>;
  fa_secret_nrlike?: Maybe<Scalars['String']>;
  fa_secret_empty?: Maybe<Scalars['String']>;
  fa_secret_nempty?: Maybe<Scalars['String']>;
  fa_secret_null?: Maybe<Scalars['String']>;
  fa_secret_nnull?: Maybe<Scalars['String']>;
  password_reset_token_eq?: Maybe<Scalars['String']>;
  password_reset_token_neq?: Maybe<Scalars['String']>;
  password_reset_token_contains?: Maybe<Scalars['String']>;
  password_reset_token_ncontains?: Maybe<Scalars['String']>;
  password_reset_token_rlike?: Maybe<Scalars['String']>;
  password_reset_token_nrlike?: Maybe<Scalars['String']>;
  password_reset_token_empty?: Maybe<Scalars['String']>;
  password_reset_token_nempty?: Maybe<Scalars['String']>;
  password_reset_token_null?: Maybe<Scalars['String']>;
  password_reset_token_nnull?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<DirectusUsersFilter>>>;
  and?: Maybe<Array<Maybe<DirectusUsersFilter>>>;
};

export type Information = {
  __typename?: 'Information';
  data?: Maybe<Array<Maybe<InformationItem>>>;
  meta?: Maybe<Metadata>;
};

export type InformationFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  created_on_eq?: Maybe<Scalars['Datetime']>;
  created_on_neq?: Maybe<Scalars['Datetime']>;
  created_on_lt?: Maybe<Scalars['Datetime']>;
  created_on_lte?: Maybe<Scalars['Datetime']>;
  created_on_gt?: Maybe<Scalars['Datetime']>;
  created_on_gte?: Maybe<Scalars['Datetime']>;
  created_on_in?: Maybe<Scalars['Datetime']>;
  created_on_nin?: Maybe<Scalars['Datetime']>;
  created_on_between?: Maybe<Scalars['String']>;
  created_on_nbetween?: Maybe<Scalars['String']>;
  text_eq?: Maybe<Scalars['String']>;
  text_neq?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_ncontains?: Maybe<Scalars['String']>;
  text_rlike?: Maybe<Scalars['String']>;
  text_nrlike?: Maybe<Scalars['String']>;
  text_empty?: Maybe<Scalars['String']>;
  text_nempty?: Maybe<Scalars['String']>;
  text_null?: Maybe<Scalars['String']>;
  text_nnull?: Maybe<Scalars['String']>;
  icon_eq?: Maybe<Scalars['String']>;
  icon_neq?: Maybe<Scalars['String']>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_ncontains?: Maybe<Scalars['String']>;
  icon_rlike?: Maybe<Scalars['String']>;
  icon_nrlike?: Maybe<Scalars['String']>;
  icon_empty?: Maybe<Scalars['String']>;
  icon_nempty?: Maybe<Scalars['String']>;
  icon_null?: Maybe<Scalars['String']>;
  icon_nnull?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<InformationFilter>>>;
  and?: Maybe<Array<Maybe<InformationFilter>>>;
};

export type InformationItem = {
  __typename?: 'InformationItem';
  id: Scalars['ID'];
  created_on?: Maybe<Scalars['Datetime']>;
  text: Scalars['String'];
  icon: Scalars['String'];
};

export type Interests = {
  __typename?: 'Interests';
  data?: Maybe<Array<Maybe<InterestsItem>>>;
  meta?: Maybe<Metadata>;
};

export type InterestsFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  created_on_eq?: Maybe<Scalars['Datetime']>;
  created_on_neq?: Maybe<Scalars['Datetime']>;
  created_on_lt?: Maybe<Scalars['Datetime']>;
  created_on_lte?: Maybe<Scalars['Datetime']>;
  created_on_gt?: Maybe<Scalars['Datetime']>;
  created_on_gte?: Maybe<Scalars['Datetime']>;
  created_on_in?: Maybe<Scalars['Datetime']>;
  created_on_nin?: Maybe<Scalars['Datetime']>;
  created_on_between?: Maybe<Scalars['String']>;
  created_on_nbetween?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ncontains?: Maybe<Scalars['String']>;
  name_rlike?: Maybe<Scalars['String']>;
  name_nrlike?: Maybe<Scalars['String']>;
  name_empty?: Maybe<Scalars['String']>;
  name_nempty?: Maybe<Scalars['String']>;
  name_null?: Maybe<Scalars['String']>;
  name_nnull?: Maybe<Scalars['String']>;
  icon_eq?: Maybe<Scalars['String']>;
  icon_neq?: Maybe<Scalars['String']>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_ncontains?: Maybe<Scalars['String']>;
  icon_rlike?: Maybe<Scalars['String']>;
  icon_nrlike?: Maybe<Scalars['String']>;
  icon_empty?: Maybe<Scalars['String']>;
  icon_nempty?: Maybe<Scalars['String']>;
  icon_null?: Maybe<Scalars['String']>;
  icon_nnull?: Maybe<Scalars['String']>;
  description_eq?: Maybe<Scalars['String']>;
  description_neq?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ncontains?: Maybe<Scalars['String']>;
  description_rlike?: Maybe<Scalars['String']>;
  description_nrlike?: Maybe<Scalars['String']>;
  description_empty?: Maybe<Scalars['String']>;
  description_nempty?: Maybe<Scalars['String']>;
  description_null?: Maybe<Scalars['String']>;
  description_nnull?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<InterestsFilter>>>;
  and?: Maybe<Array<Maybe<InterestsFilter>>>;
};

export type InterestsItem = {
  __typename?: 'InterestsItem';
  id: Scalars['ID'];
  created_on?: Maybe<Scalars['Datetime']>;
  name: Scalars['String'];
  icon: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};


export type Main = {
  __typename?: 'Main';
  data?: Maybe<Array<Maybe<MainItem>>>;
  meta?: Maybe<Metadata>;
};

export type MainFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  title_eq?: Maybe<Scalars['String']>;
  title_neq?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ncontains?: Maybe<Scalars['String']>;
  title_rlike?: Maybe<Scalars['String']>;
  title_nrlike?: Maybe<Scalars['String']>;
  title_empty?: Maybe<Scalars['String']>;
  title_nempty?: Maybe<Scalars['String']>;
  title_null?: Maybe<Scalars['String']>;
  title_nnull?: Maybe<Scalars['String']>;
  subtitle_eq?: Maybe<Scalars['String']>;
  subtitle_neq?: Maybe<Scalars['String']>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_ncontains?: Maybe<Scalars['String']>;
  subtitle_rlike?: Maybe<Scalars['String']>;
  subtitle_nrlike?: Maybe<Scalars['String']>;
  subtitle_empty?: Maybe<Scalars['String']>;
  subtitle_nempty?: Maybe<Scalars['String']>;
  subtitle_null?: Maybe<Scalars['String']>;
  subtitle_nnull?: Maybe<Scalars['String']>;
  social_all?: Maybe<Scalars['String']>;
  social_has?: Maybe<Scalars['String']>;
  background_image_all?: Maybe<Scalars['String']>;
  background_image_has?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<MainFilter>>>;
  and?: Maybe<Array<Maybe<MainFilter>>>;
};

export type MainItem = {
  __typename?: 'MainItem';
  id: Scalars['ID'];
  title: Scalars['String'];
  subtitle: Scalars['String'];
  social: Scalars['JSON'];
  background_image?: Maybe<DirectusFileItem>;
};

export type Metadata = {
  __typename?: 'Metadata';
  collection?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  result_count?: Maybe<Scalars['Int']>;
  total_count?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  directus_activity?: Maybe<DirectusActivity>;
  directus_collections?: Maybe<DirectusCollection>;
  directus_collection_presets?: Maybe<DirectusCollectionPreset>;
  directus_fields?: Maybe<DirectusField>;
  directus_files?: Maybe<DirectusFile>;
  directus_folders?: Maybe<DirectusFolder>;
  directus_permissions?: Maybe<DirectusPermission>;
  directus_relations?: Maybe<DirectusRelation>;
  directus_revisions?: Maybe<DirectusRevision>;
  directus_roles?: Maybe<DirectusRole>;
  directus_settings?: Maybe<DirectusSetting>;
  directus_users?: Maybe<DirectusUser>;
  about_me?: Maybe<AboutMe>;
  contact?: Maybe<Contact>;
  information?: Maybe<Information>;
  interests?: Maybe<Interests>;
  main?: Maybe<Main>;
  skills?: Maybe<Skills>;
};


export type QueryDirectus_ActivityArgs = {
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<DirectusActivityFilter>;
};


export type QueryDirectus_CollectionsArgs = {
  name?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryDirectus_Collection_PresetsArgs = {
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<DirectusCollectionPresetsFilter>;
};


export type QueryDirectus_FieldsArgs = {
  collection?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
};


export type QueryDirectus_FilesArgs = {
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<DirectusFilesFilter>;
};


export type QueryDirectus_FoldersArgs = {
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<DirectusFoldersFilter>;
};


export type QueryDirectus_PermissionsArgs = {
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<DirectusPermissionsFilter>;
};


export type QueryDirectus_RelationsArgs = {
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<DirectusPermissionsFilter>;
};


export type QueryDirectus_RevisionsArgs = {
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryDirectus_RolesArgs = {
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryDirectus_SettingsArgs = {
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryDirectus_UsersArgs = {
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<DirectusUsersFilter>;
};


export type QueryAbout_MeArgs = {
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  filter?: Maybe<AboutMeFilter>;
};


export type QueryContactArgs = {
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  filter?: Maybe<ContactFilter>;
};


export type QueryInformationArgs = {
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  filter?: Maybe<InformationFilter>;
};


export type QueryInterestsArgs = {
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  filter?: Maybe<InterestsFilter>;
};


export type QueryMainArgs = {
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  filter?: Maybe<MainFilter>;
};


export type QuerySkillsArgs = {
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  lang?: Maybe<Scalars['String']>;
  filter?: Maybe<SkillsFilter>;
};

export type Skills = {
  __typename?: 'Skills';
  data?: Maybe<Array<Maybe<SkillsItem>>>;
  meta?: Maybe<Metadata>;
};

export type SkillsFilter = {
  id_eq?: Maybe<Scalars['Int']>;
  id_neq?: Maybe<Scalars['Int']>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Scalars['String']>;
  id_nin?: Maybe<Scalars['String']>;
  id_between?: Maybe<Scalars['String']>;
  id_nbetween?: Maybe<Scalars['String']>;
  created_on_eq?: Maybe<Scalars['Datetime']>;
  created_on_neq?: Maybe<Scalars['Datetime']>;
  created_on_lt?: Maybe<Scalars['Datetime']>;
  created_on_lte?: Maybe<Scalars['Datetime']>;
  created_on_gt?: Maybe<Scalars['Datetime']>;
  created_on_gte?: Maybe<Scalars['Datetime']>;
  created_on_in?: Maybe<Scalars['Datetime']>;
  created_on_nin?: Maybe<Scalars['Datetime']>;
  created_on_between?: Maybe<Scalars['String']>;
  created_on_nbetween?: Maybe<Scalars['String']>;
  type_eq?: Maybe<Scalars['String']>;
  type_neq?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_ncontains?: Maybe<Scalars['String']>;
  type_rlike?: Maybe<Scalars['String']>;
  type_nrlike?: Maybe<Scalars['String']>;
  type_empty?: Maybe<Scalars['String']>;
  type_nempty?: Maybe<Scalars['String']>;
  type_null?: Maybe<Scalars['String']>;
  type_nnull?: Maybe<Scalars['String']>;
  image_all?: Maybe<Scalars['String']>;
  image_has?: Maybe<Scalars['String']>;
  link_eq?: Maybe<Scalars['String']>;
  link_neq?: Maybe<Scalars['String']>;
  link_contains?: Maybe<Scalars['String']>;
  link_ncontains?: Maybe<Scalars['String']>;
  link_rlike?: Maybe<Scalars['String']>;
  link_nrlike?: Maybe<Scalars['String']>;
  link_empty?: Maybe<Scalars['String']>;
  link_nempty?: Maybe<Scalars['String']>;
  link_null?: Maybe<Scalars['String']>;
  link_nnull?: Maybe<Scalars['String']>;
  name_eq?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ncontains?: Maybe<Scalars['String']>;
  name_rlike?: Maybe<Scalars['String']>;
  name_nrlike?: Maybe<Scalars['String']>;
  name_empty?: Maybe<Scalars['String']>;
  name_nempty?: Maybe<Scalars['String']>;
  name_null?: Maybe<Scalars['String']>;
  name_nnull?: Maybe<Scalars['String']>;
  or?: Maybe<Array<Maybe<SkillsFilter>>>;
  and?: Maybe<Array<Maybe<SkillsFilter>>>;
};

export type SkillsItem = {
  __typename?: 'SkillsItem';
  id: Scalars['ID'];
  created_on?: Maybe<Scalars['Datetime']>;
  type: Scalars['String'];
  image: DirectusFileItem;
  link: Scalars['String'];
  name: Scalars['String'];
};

export type InterestQueryVariables = Exact<{ [key: string]: never; }>;


export type InterestQuery = (
  { __typename?: 'Query' }
  & { interests?: Maybe<(
    { __typename?: 'Interests' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'InterestsItem' }
      & Pick<InterestsItem, 'id' | 'name' | 'icon' | 'description'>
    )>>> }
  )> }
);

export type MainSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type MainSectionQuery = (
  { __typename?: 'Query' }
  & { main?: Maybe<(
    { __typename?: 'Main' }
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'MainItem' }
      & Pick<MainItem, 'id' | 'title' | 'subtitle'>
      & { background_image?: Maybe<(
        { __typename?: 'DirectusFileItem' }
        & Pick<DirectusFileItem, 'full_url'>
      )> }
    )>>> }
  )> }
);


export const InterestDocument = gql`
    query Interest {
  interests {
    data {
      id
      name
      icon
      description
    }
  }
}
    `;

/**
 * __useInterestQuery__
 *
 * To run a query within a React component, call `useInterestQuery` and pass it any options that fit your needs.
 * When your component renders, `useInterestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInterestQuery({
 *   variables: {
 *   },
 * });
 */
export function useInterestQuery(baseOptions?: Apollo.QueryHookOptions<InterestQuery, InterestQueryVariables>) {
        return Apollo.useQuery<InterestQuery, InterestQueryVariables>(InterestDocument, baseOptions);
      }
export function useInterestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InterestQuery, InterestQueryVariables>) {
          return Apollo.useLazyQuery<InterestQuery, InterestQueryVariables>(InterestDocument, baseOptions);
        }
export type InterestQueryHookResult = ReturnType<typeof useInterestQuery>;
export type InterestLazyQueryHookResult = ReturnType<typeof useInterestLazyQuery>;
export type InterestQueryResult = Apollo.QueryResult<InterestQuery, InterestQueryVariables>;
export const MainSectionDocument = gql`
    query MainSection {
  main {
    data {
      id
      title
      subtitle
      background_image {
        full_url
      }
    }
  }
}
    `;

/**
 * __useMainSectionQuery__
 *
 * To run a query within a React component, call `useMainSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainSectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useMainSectionQuery(baseOptions?: Apollo.QueryHookOptions<MainSectionQuery, MainSectionQueryVariables>) {
        return Apollo.useQuery<MainSectionQuery, MainSectionQueryVariables>(MainSectionDocument, baseOptions);
      }
export function useMainSectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MainSectionQuery, MainSectionQueryVariables>) {
          return Apollo.useLazyQuery<MainSectionQuery, MainSectionQueryVariables>(MainSectionDocument, baseOptions);
        }
export type MainSectionQueryHookResult = ReturnType<typeof useMainSectionQuery>;
export type MainSectionLazyQueryHookResult = ReturnType<typeof useMainSectionLazyQuery>;
export type MainSectionQueryResult = Apollo.QueryResult<MainSectionQuery, MainSectionQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    