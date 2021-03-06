/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.1
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { DocDto } from './docDto';
import { Geometry } from './geometry';
import { Xml } from './xml';

export interface InstanceDto { 
    id?: number;
    name: string;
    version: string;
    publishedAt?: Date;
    lastUpdatedAt?: Date;
    comment: string;
    geometry?: Geometry;
    geometryContentType?: string;
    instanceId: string;
    keywords?: Array<string>;
    status: InstanceDto.StatusEnum;
    organizationId?: string;
    unlocode?: Array<string>;
    endpointUri?: string;
    endpointType?: string;
    mmsi?: string;
    imo?: string;
    serviceType?: Array<string>;
    instanceAsXml?: Xml;
    instanceAsDoc?: DocDto;
    ledgerRequestId?: number;
    ledgerRequestStatus?: InstanceDto.LedgerRequestStatusEnum;
    docIds?: Array<number>;
    implementsServiceDesign?: string;
    implementsServiceDesignVersion?: string;
}
export namespace InstanceDto {
    export type StatusEnum = 'PROVISIONAL' | 'RELEASED' | 'DEPRECATED' | 'DELETED';
    export const StatusEnum = {
        PROVISIONAL: 'PROVISIONAL' as StatusEnum,
        RELEASED: 'RELEASED' as StatusEnum,
        DEPRECATED: 'DEPRECATED' as StatusEnum,
        DELETED: 'DELETED' as StatusEnum
    };
    export type LedgerRequestStatusEnum = 'INACTIVE' | 'CREATED' | 'VETTING' | 'VETTED' | 'REQUESTING' | 'SUCCEEDED' | 'FAILED' | 'REJECTED';
    export const LedgerRequestStatusEnum = {
        INACTIVE: 'INACTIVE' as LedgerRequestStatusEnum,
        CREATED: 'CREATED' as LedgerRequestStatusEnum,
        VETTING: 'VETTING' as LedgerRequestStatusEnum,
        VETTED: 'VETTED' as LedgerRequestStatusEnum,
        REQUESTING: 'REQUESTING' as LedgerRequestStatusEnum,
        SUCCEEDED: 'SUCCEEDED' as LedgerRequestStatusEnum,
        FAILED: 'FAILED' as LedgerRequestStatusEnum,
        REJECTED: 'REJECTED' as LedgerRequestStatusEnum
    };
}