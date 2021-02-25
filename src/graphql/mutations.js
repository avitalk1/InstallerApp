/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInstllerInfo = /* GraphQL */ `
  mutation CreateInstllerInfo(
    $input: CreateInstllerInfoInput!
    $condition: ModelInstllerInfoConditionInput
  ) {
    createInstllerInfo(input: $input, condition: $condition) {
      id
      installerUsername
      QRLink
      HouseID
      createdAt
      updatedAt
    }
  }
`;
export const updateInstllerInfo = /* GraphQL */ `
  mutation UpdateInstllerInfo(
    $input: UpdateInstllerInfoInput!
    $condition: ModelInstllerInfoConditionInput
  ) {
    updateInstllerInfo(input: $input, condition: $condition) {
      id
      installerUsername
      QRLink
      HouseID
      createdAt
      updatedAt
    }
  }
`;
export const deleteInstllerInfo = /* GraphQL */ `
  mutation DeleteInstllerInfo(
    $input: DeleteInstllerInfoInput!
    $condition: ModelInstllerInfoConditionInput
  ) {
    deleteInstllerInfo(input: $input, condition: $condition) {
      id
      installerUsername
      QRLink
      HouseID
      createdAt
      updatedAt
    }
  }
`;
