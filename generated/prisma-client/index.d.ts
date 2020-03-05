// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  todo: (where?: TodoWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  todo: (where: TodoWhereUniqueInput) => TodoNullablePromise;
  todoes: (args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Todo>;
  todoesConnection: (args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TodoConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTodo: (data: TodoCreateInput) => TodoPromise;
  updateTodo: (args: {
    data: TodoUpdateInput;
    where: TodoWhereUniqueInput;
  }) => TodoPromise;
  updateManyTodoes: (args: {
    data: TodoUpdateManyMutationInput;
    where?: TodoWhereInput;
  }) => BatchPayloadPromise;
  upsertTodo: (args: {
    where: TodoWhereUniqueInput;
    create: TodoCreateInput;
    update: TodoUpdateInput;
  }) => TodoPromise;
  deleteTodo: (where: TodoWhereUniqueInput) => TodoPromise;
  deleteManyTodoes: (where?: TodoWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  todo: (
    where?: TodoSubscriptionWhereInput
  ) => TodoSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TodoOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "done_ASC"
  | "done_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneWithoutTodosInput {
  create?: Maybe<UserCreateWithoutTodosInput>;
  update?: Maybe<UserUpdateWithoutTodosDataInput>;
  upsert?: Maybe<UserUpsertWithoutTodosInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type TodoWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  title?: Maybe<String>;
}>;

export interface TodoUpdateManyWithoutOwnerInput {
  create?: Maybe<TodoCreateWithoutOwnerInput[] | TodoCreateWithoutOwnerInput>;
  delete?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
  connect?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
  set?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
  disconnect?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
  update?: Maybe<
    | TodoUpdateWithWhereUniqueWithoutOwnerInput[]
    | TodoUpdateWithWhereUniqueWithoutOwnerInput
  >;
  upsert?: Maybe<
    | TodoUpsertWithWhereUniqueWithoutOwnerInput[]
    | TodoUpsertWithWhereUniqueWithoutOwnerInput
  >;
  deleteMany?: Maybe<TodoScalarWhereInput[] | TodoScalarWhereInput>;
  updateMany?: Maybe<
    TodoUpdateManyWithWhereNestedInput[] | TodoUpdateManyWithWhereNestedInput
  >;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email?: Maybe<String>;
  todos?: Maybe<TodoCreateManyWithoutOwnerInput>;
}

export interface TodoUpdateManyMutationInput {
  title?: Maybe<String>;
  done?: Maybe<Boolean>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface TodoCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  done: Boolean;
  owner?: Maybe<UserCreateOneWithoutTodosInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
}

export interface UserCreateOneWithoutTodosInput {
  create?: Maybe<UserCreateWithoutTodosInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput;
  data: TodoUpdateManyDataInput;
}

export interface UserCreateWithoutTodosInput {
  id?: Maybe<ID_Input>;
  name: String;
  email?: Maybe<String>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface TodoUpdateInput {
  title?: Maybe<String>;
  done?: Maybe<Boolean>;
  owner?: Maybe<UserUpdateOneWithoutTodosInput>;
}

export interface TodoUpdateWithoutOwnerDataInput {
  title?: Maybe<String>;
  done?: Maybe<Boolean>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  todos?: Maybe<TodoUpdateManyWithoutOwnerInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  todos_every?: Maybe<TodoWhereInput>;
  todos_some?: Maybe<TodoWhereInput>;
  todos_none?: Maybe<TodoWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserUpdateWithoutTodosDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
}

export interface TodoUpdateManyDataInput {
  title?: Maybe<String>;
  done?: Maybe<Boolean>;
}

export interface TodoCreateManyWithoutOwnerInput {
  create?: Maybe<TodoCreateWithoutOwnerInput[] | TodoCreateWithoutOwnerInput>;
  connect?: Maybe<TodoWhereUniqueInput[] | TodoWhereUniqueInput>;
}

export interface TodoCreateWithoutOwnerInput {
  id?: Maybe<ID_Input>;
  title: String;
  done: Boolean;
}

export interface TodoWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  done?: Maybe<Boolean>;
  done_not?: Maybe<Boolean>;
  owner?: Maybe<UserWhereInput>;
  AND?: Maybe<TodoWhereInput[] | TodoWhereInput>;
  OR?: Maybe<TodoWhereInput[] | TodoWhereInput>;
  NOT?: Maybe<TodoWhereInput[] | TodoWhereInput>;
}

export interface UserUpsertWithoutTodosInput {
  update: UserUpdateWithoutTodosDataInput;
  create: UserCreateWithoutTodosInput;
}

export interface TodoScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  done?: Maybe<Boolean>;
  done_not?: Maybe<Boolean>;
  AND?: Maybe<TodoScalarWhereInput[] | TodoScalarWhereInput>;
  OR?: Maybe<TodoScalarWhereInput[] | TodoScalarWhereInput>;
  NOT?: Maybe<TodoScalarWhereInput[] | TodoScalarWhereInput>;
}

export interface TodoSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TodoWhereInput>;
  AND?: Maybe<TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput>;
  OR?: Maybe<TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput>;
  NOT?: Maybe<TodoSubscriptionWhereInput[] | TodoSubscriptionWhereInput>;
}

export interface TodoUpdateWithWhereUniqueWithoutOwnerInput {
  where: TodoWhereUniqueInput;
  data: TodoUpdateWithoutOwnerDataInput;
}

export interface TodoUpsertWithWhereUniqueWithoutOwnerInput {
  where: TodoWhereUniqueInput;
  update: TodoUpdateWithoutOwnerDataInput;
  create: TodoCreateWithoutOwnerInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  todos: <T = FragmentableArray<Todo>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  todos: <T = Promise<AsyncIterator<TodoSubscription>>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  todos: <T = FragmentableArray<Todo>>(args?: {
    where?: TodoWhereInput;
    orderBy?: TodoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TodoEdge {
  node: Todo;
  cursor: String;
}

export interface TodoEdgePromise extends Promise<TodoEdge>, Fragmentable {
  node: <T = TodoPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TodoEdgeSubscription
  extends Promise<AsyncIterator<TodoEdge>>,
    Fragmentable {
  node: <T = TodoSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface TodoSubscriptionPayload {
  mutation: MutationType;
  node: Todo;
  updatedFields: String[];
  previousValues: TodoPreviousValues;
}

export interface TodoSubscriptionPayloadPromise
  extends Promise<TodoSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TodoPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TodoPreviousValuesPromise>() => T;
}

export interface TodoSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TodoSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TodoSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TodoPreviousValuesSubscription>() => T;
}

export interface TodoConnection {
  pageInfo: PageInfo;
  edges: TodoEdge[];
}

export interface TodoConnectionPromise
  extends Promise<TodoConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TodoEdge>>() => T;
  aggregate: <T = AggregateTodoPromise>() => T;
}

export interface TodoConnectionSubscription
  extends Promise<AsyncIterator<TodoConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TodoEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTodoSubscription>() => T;
}

export interface TodoPreviousValues {
  id: ID_Output;
  title: String;
  done: Boolean;
}

export interface TodoPreviousValuesPromise
  extends Promise<TodoPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  done: () => Promise<Boolean>;
}

export interface TodoPreviousValuesSubscription
  extends Promise<AsyncIterator<TodoPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  done: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTodo {
  count: Int;
}

export interface AggregateTodoPromise
  extends Promise<AggregateTodo>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTodoSubscription
  extends Promise<AsyncIterator<AggregateTodo>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Todo {
  id: ID_Output;
  title: String;
  done: Boolean;
}

export interface TodoPromise extends Promise<Todo>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  done: () => Promise<Boolean>;
  owner: <T = UserPromise>() => T;
}

export interface TodoSubscription
  extends Promise<AsyncIterator<Todo>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  done: () => Promise<AsyncIterator<Boolean>>;
  owner: <T = UserSubscription>() => T;
}

export interface TodoNullablePromise
  extends Promise<Todo | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  done: () => Promise<Boolean>;
  owner: <T = UserPromise>() => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Todo",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
