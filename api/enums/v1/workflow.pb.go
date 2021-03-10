// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: temporal/api/enums/v1/workflow.proto

package enums

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	math "math"
	strconv "strconv"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type WorkflowIdReusePolicy int32

const (
	WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED WorkflowIdReusePolicy = 0
	// Allow start a workflow execution using the same workflow Id, when workflow not running.
	WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE WorkflowIdReusePolicy = 1
	// Allow start a workflow execution using the same workflow Id, when workflow not running, and the last execution close state is in
	// [terminated, cancelled, timed out, failed].
	WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY WorkflowIdReusePolicy = 2
	// Do not allow start a workflow execution using the same workflow Id at all.
	WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE WorkflowIdReusePolicy = 3
)

var WorkflowIdReusePolicy_name = map[int32]string{
	0: "Unspecified",
	1: "AllowDuplicate",
	2: "AllowDuplicateFailedOnly",
	3: "RejectDuplicate",
}

var WorkflowIdReusePolicy_value = map[string]int32{
	"Unspecified":              0,
	"AllowDuplicate":           1,
	"AllowDuplicateFailedOnly": 2,
	"RejectDuplicate":          3,
}

func (WorkflowIdReusePolicy) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{0}
}

type ParentClosePolicy int32

const (
	PARENT_CLOSE_POLICY_UNSPECIFIED ParentClosePolicy = 0
	// Terminate means terminating the child workflow.
	PARENT_CLOSE_POLICY_TERMINATE ParentClosePolicy = 1
	// Abandon means not doing anything on the child workflow.
	PARENT_CLOSE_POLICY_ABANDON ParentClosePolicy = 2
	// Cancel means requesting cancellation on the child workflow.
	PARENT_CLOSE_POLICY_REQUEST_CANCEL ParentClosePolicy = 3
)

var ParentClosePolicy_name = map[int32]string{
	0: "Unspecified",
	1: "Terminate",
	2: "Abandon",
	3: "RequestCancel",
}

var ParentClosePolicy_value = map[string]int32{
	"Unspecified":   0,
	"Terminate":     1,
	"Abandon":       2,
	"RequestCancel": 3,
}

func (ParentClosePolicy) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{1}
}

type ContinueAsNewInitiator int32

const (
	CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED   ContinueAsNewInitiator = 0
	CONTINUE_AS_NEW_INITIATOR_WORKFLOW      ContinueAsNewInitiator = 1
	CONTINUE_AS_NEW_INITIATOR_RETRY         ContinueAsNewInitiator = 2
	CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE ContinueAsNewInitiator = 3
)

var ContinueAsNewInitiator_name = map[int32]string{
	0: "Unspecified",
	1: "Workflow",
	2: "Retry",
	3: "CronSchedule",
}

var ContinueAsNewInitiator_value = map[string]int32{
	"Unspecified":  0,
	"Workflow":     1,
	"Retry":        2,
	"CronSchedule": 3,
}

func (ContinueAsNewInitiator) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{2}
}

// (-- api-linter: core::0216::synonyms=disabled
//     aip.dev/not-precedent: There is WorkflowExecutionState already in another package. --)
type WorkflowExecutionStatus int32

const (
	WORKFLOW_EXECUTION_STATUS_UNSPECIFIED WorkflowExecutionStatus = 0
	// Value 1 is hardcoded in SQL persistence.
	WORKFLOW_EXECUTION_STATUS_RUNNING          WorkflowExecutionStatus = 1
	WORKFLOW_EXECUTION_STATUS_COMPLETED        WorkflowExecutionStatus = 2
	WORKFLOW_EXECUTION_STATUS_FAILED           WorkflowExecutionStatus = 3
	WORKFLOW_EXECUTION_STATUS_CANCELED         WorkflowExecutionStatus = 4
	WORKFLOW_EXECUTION_STATUS_TERMINATED       WorkflowExecutionStatus = 5
	WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW WorkflowExecutionStatus = 6
	WORKFLOW_EXECUTION_STATUS_TIMED_OUT        WorkflowExecutionStatus = 7
)

var WorkflowExecutionStatus_name = map[int32]string{
	0: "Unspecified",
	1: "Running",
	2: "Completed",
	3: "Failed",
	4: "Canceled",
	5: "Terminated",
	6: "ContinuedAsNew",
	7: "TimedOut",
}

var WorkflowExecutionStatus_value = map[string]int32{
	"Unspecified":    0,
	"Running":        1,
	"Completed":      2,
	"Failed":         3,
	"Canceled":       4,
	"Terminated":     5,
	"ContinuedAsNew": 6,
	"TimedOut":       7,
}

func (WorkflowExecutionStatus) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{3}
}

type PendingActivityState int32

const (
	PENDING_ACTIVITY_STATE_UNSPECIFIED      PendingActivityState = 0
	PENDING_ACTIVITY_STATE_SCHEDULED        PendingActivityState = 1
	PENDING_ACTIVITY_STATE_STARTED          PendingActivityState = 2
	PENDING_ACTIVITY_STATE_CANCEL_REQUESTED PendingActivityState = 3
)

var PendingActivityState_name = map[int32]string{
	0: "Unspecified",
	1: "Scheduled",
	2: "Started",
	3: "CancelRequested",
}

var PendingActivityState_value = map[string]int32{
	"Unspecified":     0,
	"Scheduled":       1,
	"Started":         2,
	"CancelRequested": 3,
}

func (PendingActivityState) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{4}
}

type HistoryEventFilterType int32

const (
	HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED HistoryEventFilterType = 0
	HISTORY_EVENT_FILTER_TYPE_ALL_EVENT   HistoryEventFilterType = 1
	HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT HistoryEventFilterType = 2
)

var HistoryEventFilterType_name = map[int32]string{
	0: "Unspecified",
	1: "AllEvent",
	2: "CloseEvent",
}

var HistoryEventFilterType_value = map[string]int32{
	"Unspecified": 0,
	"AllEvent":    1,
	"CloseEvent":  2,
}

func (HistoryEventFilterType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{5}
}

type RetryState int32

const (
	RETRY_STATE_UNSPECIFIED              RetryState = 0
	RETRY_STATE_IN_PROGRESS              RetryState = 1
	RETRY_STATE_NON_RETRYABLE_FAILURE    RetryState = 2
	RETRY_STATE_TIMEOUT                  RetryState = 3
	RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED RetryState = 4
	RETRY_STATE_RETRY_POLICY_NOT_SET     RetryState = 5
	RETRY_STATE_INTERNAL_SERVER_ERROR    RetryState = 6
	RETRY_STATE_CANCEL_REQUESTED         RetryState = 7
)

var RetryState_name = map[int32]string{
	0: "Unspecified",
	1: "InProgress",
	2: "NonRetryableFailure",
	3: "Timeout",
	4: "MaximumAttemptsReached",
	5: "RetryPolicyNotSet",
	6: "InternalServerError",
	7: "CancelRequested",
}

var RetryState_value = map[string]int32{
	"Unspecified":            0,
	"InProgress":             1,
	"NonRetryableFailure":    2,
	"Timeout":                3,
	"MaximumAttemptsReached": 4,
	"RetryPolicyNotSet":      5,
	"InternalServerError":    6,
	"CancelRequested":        7,
}

func (RetryState) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{6}
}

type TimeoutType int32

const (
	TIMEOUT_TYPE_UNSPECIFIED       TimeoutType = 0
	TIMEOUT_TYPE_START_TO_CLOSE    TimeoutType = 1
	TIMEOUT_TYPE_SCHEDULE_TO_START TimeoutType = 2
	TIMEOUT_TYPE_SCHEDULE_TO_CLOSE TimeoutType = 3
	TIMEOUT_TYPE_HEARTBEAT         TimeoutType = 4
)

var TimeoutType_name = map[int32]string{
	0: "Unspecified",
	1: "StartToClose",
	2: "ScheduleToStart",
	3: "ScheduleToClose",
	4: "Heartbeat",
}

var TimeoutType_value = map[string]int32{
	"Unspecified":     0,
	"StartToClose":    1,
	"ScheduleToStart": 2,
	"ScheduleToClose": 3,
	"Heartbeat":       4,
}

func (TimeoutType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_939fa9511cc117f0, []int{7}
}

func init() {
	proto.RegisterEnum("temporal.api.enums.v1.WorkflowIdReusePolicy", WorkflowIdReusePolicy_name, WorkflowIdReusePolicy_value)
	proto.RegisterEnum("temporal.api.enums.v1.ParentClosePolicy", ParentClosePolicy_name, ParentClosePolicy_value)
	proto.RegisterEnum("temporal.api.enums.v1.ContinueAsNewInitiator", ContinueAsNewInitiator_name, ContinueAsNewInitiator_value)
	proto.RegisterEnum("temporal.api.enums.v1.WorkflowExecutionStatus", WorkflowExecutionStatus_name, WorkflowExecutionStatus_value)
	proto.RegisterEnum("temporal.api.enums.v1.PendingActivityState", PendingActivityState_name, PendingActivityState_value)
	proto.RegisterEnum("temporal.api.enums.v1.HistoryEventFilterType", HistoryEventFilterType_name, HistoryEventFilterType_value)
	proto.RegisterEnum("temporal.api.enums.v1.RetryState", RetryState_name, RetryState_value)
	proto.RegisterEnum("temporal.api.enums.v1.TimeoutType", TimeoutType_name, TimeoutType_value)
}

func init() {
	proto.RegisterFile("temporal/api/enums/v1/workflow.proto", fileDescriptor_939fa9511cc117f0)
}

var fileDescriptor_939fa9511cc117f0 = []byte{
	// 914 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x95, 0xcf, 0x6f, 0xe3, 0xc4,
	0x1b, 0xc6, 0x33, 0x6e, 0xb7, 0x2b, 0xcd, 0x57, 0x5f, 0x69, 0x30, 0xf4, 0x87, 0xe8, 0xe2, 0xfe,
	0xdc, 0xed, 0x6e, 0x16, 0x52, 0x55, 0x70, 0x40, 0xe1, 0x34, 0xb5, 0xdf, 0xb6, 0x03, 0xce, 0xd8,
	0x8c, 0xc7, 0xe9, 0x86, 0xcb, 0x28, 0x74, 0xcd, 0xca, 0x22, 0x8d, 0xa3, 0xc4, 0x69, 0xe9, 0x8d,
	0x3f, 0x81, 0x1b, 0x47, 0x2e, 0x1c, 0x10, 0x27, 0x2e, 0x7b, 0xe4, 0xce, 0xb1, 0xc7, 0x1e, 0x69,
	0x2a, 0x24, 0xc4, 0x69, 0xff, 0x04, 0x34, 0x76, 0x52, 0x25, 0xd9, 0x38, 0xe2, 0x66, 0xcd, 0x7c,
	0x66, 0x3c, 0xef, 0xf3, 0x3c, 0xef, 0x0c, 0xde, 0x4d, 0xa3, 0xf3, 0x4e, 0xd2, 0x6d, 0xb6, 0xf6,
	0x9b, 0x9d, 0x78, 0x3f, 0x6a, 0xf7, 0xcf, 0x7b, 0xfb, 0x17, 0x07, 0xfb, 0x97, 0x49, 0xf7, 0xdb,
	0x6f, 0x5a, 0xc9, 0x65, 0xa5, 0xd3, 0x4d, 0xd2, 0xc4, 0x5c, 0x1e, 0x51, 0x95, 0x66, 0x27, 0xae,
	0x64, 0x54, 0xe5, 0xe2, 0xa0, 0x7c, 0x83, 0xf0, 0xf2, 0xe9, 0x90, 0x64, 0x2f, 0x45, 0xd4, 0xef,
	0x45, 0x7e, 0xd2, 0x8a, 0xcf, 0xae, 0xcc, 0xa7, 0x78, 0xf7, 0xd4, 0x13, 0x5f, 0x1c, 0xb9, 0xde,
	0xa9, 0x62, 0x8e, 0x12, 0x10, 0x06, 0xa0, 0x7c, 0xcf, 0x65, 0x76, 0x43, 0x85, 0x3c, 0xf0, 0xc1,
	0x66, 0x47, 0x0c, 0x1c, 0x52, 0x32, 0x3f, 0xc4, 0x4f, 0x0b, 0x49, 0xea, 0xea, 0x51, 0x27, 0xf4,
	0x5d, 0x66, 0x53, 0x09, 0x04, 0x99, 0x9f, 0xe2, 0x4f, 0xfe, 0x2b, 0xad, 0x8e, 0x28, 0x73, 0xc1,
	0x51, 0x1e, 0x77, 0x1b, 0xc4, 0x30, 0x3f, 0xc2, 0xcf, 0x0a, 0x57, 0x0a, 0xf8, 0x1c, 0x6c, 0x39,
	0xf6, 0xa3, 0x85, 0xf2, 0xcf, 0x08, 0xbf, 0xe3, 0x37, 0xbb, 0x51, 0x3b, 0xb5, 0x5b, 0xc9, 0x7d,
	0x59, 0x3b, 0x78, 0xc3, 0xa7, 0x02, 0xb8, 0x54, 0xb6, 0xeb, 0x15, 0x55, 0xb4, 0x85, 0x3f, 0x98,
	0x05, 0x49, 0x10, 0x35, 0xc6, 0xf3, 0x32, 0x36, 0xf0, 0xfa, 0x2c, 0x84, 0x1e, 0x52, 0xee, 0x78,
	0x9c, 0x18, 0xe6, 0x13, 0xbc, 0x3d, 0x0b, 0x10, 0xf0, 0x65, 0x08, 0x81, 0x54, 0x36, 0xe5, 0x36,
	0xb8, 0x64, 0xa1, 0xfc, 0x3b, 0xc2, 0x2b, 0x76, 0xd2, 0x4e, 0xe3, 0x76, 0x3f, 0xa2, 0x3d, 0x1e,
	0x5d, 0xb2, 0x76, 0x9c, 0xc6, 0xcd, 0x34, 0xe9, 0x9a, 0xcf, 0xf0, 0x63, 0xdb, 0xe3, 0x92, 0xf1,
	0x10, 0x14, 0x0d, 0x14, 0x87, 0x53, 0xc5, 0x38, 0x93, 0x8c, 0x4a, 0x4f, 0x4c, 0x9d, 0xf8, 0x09,
	0xde, 0x2e, 0x46, 0x47, 0xaa, 0x11, 0xa4, 0xcb, 0x2f, 0xe6, 0x04, 0x48, 0xa1, 0x85, 0x7e, 0x8e,
	0xf7, 0x8a, 0x21, 0x5b, 0x78, 0x5c, 0x05, 0xf6, 0x09, 0x38, 0xa1, 0xab, 0x65, 0xfe, 0xcb, 0xc0,
	0xab, 0xa3, 0x04, 0xc1, 0x77, 0xd1, 0x59, 0x3f, 0x8d, 0x93, 0x76, 0x90, 0x36, 0xd3, 0x7e, 0x4f,
	0x17, 0x70, 0xef, 0x18, 0xbc, 0x00, 0x3b, 0x94, 0x4c, 0x2f, 0x96, 0x54, 0x86, 0xc1, 0x54, 0x01,
	0x8f, 0xf1, 0x56, 0x31, 0x2a, 0x42, 0xce, 0x19, 0x3f, 0x26, 0xc8, 0xdc, 0xc3, 0x3b, 0xc5, 0x98,
	0xed, 0xd5, 0x7c, 0x17, 0x24, 0x38, 0xc4, 0x30, 0x77, 0xf1, 0x66, 0x31, 0x98, 0xe7, 0x8a, 0x2c,
	0x68, 0xd9, 0xe6, 0x6c, 0x97, 0x59, 0x04, 0x0e, 0x59, 0x9c, 0x68, 0x86, 0xb7, 0xb8, 0xfb, 0x58,
	0x38, 0xe4, 0x81, 0x59, 0xc1, 0xe5, 0x79, 0x07, 0xcc, 0x55, 0x75, 0x86, 0xb2, 0x92, 0xa5, 0xf9,
	0x05, 0x49, 0x56, 0xd3, 0xf1, 0x0f, 0x25, 0x79, 0x58, 0x7e, 0x8d, 0xf0, 0x7b, 0x7e, 0xd4, 0x7e,
	0x19, 0xb7, 0x5f, 0xd1, 0xb3, 0x34, 0xbe, 0x88, 0xd3, 0x2b, 0xad, 0x72, 0x94, 0x05, 0x0d, 0xb8,
	0xc3, 0xf8, 0xb1, 0xa2, 0xb6, 0x64, 0x75, 0x26, 0x1b, 0xd9, 0x7a, 0x98, 0x52, 0x78, 0x17, 0x6f,
	0x16, 0x70, 0x23, 0x37, 0x1d, 0x82, 0xcc, 0x6d, 0x6c, 0x15, 0x51, 0x92, 0x8a, 0x5c, 0xdb, 0xe7,
	0x78, 0xaf, 0x80, 0xc9, 0x25, 0x1b, 0x85, 0x5c, 0x4b, 0x5c, 0xfe, 0x11, 0xe1, 0x95, 0x93, 0xb8,
	0x97, 0x26, 0xdd, 0x2b, 0xb8, 0x88, 0xda, 0xe9, 0x51, 0xdc, 0x4a, 0xa3, 0xae, 0xbc, 0xea, 0x44,
	0x3a, 0x1e, 0x27, 0x2c, 0x90, 0x9e, 0x68, 0x28, 0xa8, 0xeb, 0x4e, 0x39, 0x62, 0xae, 0x04, 0xa1,
	0x64, 0xc3, 0x9f, 0x3e, 0xfc, 0x1e, 0xde, 0x29, 0x46, 0xa9, 0xeb, 0xe6, 0xa3, 0x04, 0xcd, 0xdf,
	0x33, 0xef, 0xc4, 0x1c, 0x35, 0xca, 0x3f, 0x19, 0x18, 0x8b, 0x28, 0xed, 0x0e, 0x75, 0x5c, 0xc7,
	0xab, 0x59, 0x03, 0xcc, 0x14, 0x6f, 0x6a, 0x92, 0x71, 0xe5, 0x0b, 0xef, 0x58, 0x40, 0x10, 0x10,
	0xa4, 0xb3, 0x3b, 0x3e, 0xc9, 0x3d, 0x9e, 0xb7, 0x12, 0x3d, 0x74, 0xf3, 0x3b, 0x2c, 0x14, 0x40,
	0x0c, 0x73, 0x15, 0xbf, 0x3b, 0x8e, 0x69, 0x73, 0xb5, 0xb5, 0x0b, 0x3a, 0x5d, 0xe3, 0x13, 0x35,
	0xfa, 0x82, 0xd5, 0xc2, 0x9a, 0xa2, 0x52, 0x42, 0xcd, 0x97, 0x81, 0x12, 0x40, 0xb5, 0x43, 0x64,
	0x51, 0x7b, 0x38, 0x4e, 0xe6, 0xdf, 0xc3, 0x9b, 0x85, 0x7b, 0x52, 0x05, 0x20, 0xc9, 0x83, 0xe9,
	0xf3, 0x30, 0x2e, 0x41, 0x70, 0xea, 0xaa, 0x00, 0x44, 0x1d, 0x84, 0x02, 0x21, 0x3c, 0x41, 0x96,
	0xcc, 0x4d, 0xfc, 0x68, 0x1c, 0x7b, 0xcb, 0xbb, 0x87, 0xe5, 0xdf, 0x10, 0xfe, 0x9f, 0x8c, 0xcf,
	0xa3, 0xa4, 0x9f, 0x66, 0x86, 0x3d, 0xc2, 0x6b, 0xc3, 0x53, 0xcf, 0xf2, 0x68, 0x03, 0xaf, 0x4f,
	0xcc, 0x66, 0x81, 0x51, 0xd2, 0xcb, 0x65, 0xcf, 0xb3, 0x35, 0x09, 0x0c, 0x73, 0xa7, 0x99, 0x0c,
	0x26, 0xc6, 0x5c, 0x26, 0xdf, 0x67, 0xc1, 0x7c, 0x1f, 0xaf, 0x4c, 0x30, 0x27, 0x40, 0x85, 0x3c,
	0x04, 0x2a, 0xc9, 0xe2, 0xe1, 0x6b, 0x74, 0x7d, 0x6b, 0x95, 0x6e, 0x6e, 0xad, 0xd2, 0x9b, 0x5b,
	0x0b, 0x7d, 0x3f, 0xb0, 0xd0, 0x2f, 0x03, 0x0b, 0xfd, 0x31, 0xb0, 0xd0, 0xf5, 0xc0, 0x42, 0x7f,
	0x0e, 0x2c, 0xf4, 0xf7, 0xc0, 0x2a, 0xbd, 0x19, 0x58, 0xe8, 0x87, 0x3b, 0xab, 0x74, 0x7d, 0x67,
	0x95, 0x6e, 0xee, 0xac, 0x12, 0x5e, 0x8b, 0x93, 0xca, 0xcc, 0x17, 0xf2, 0xf0, 0xff, 0xa3, 0xcb,
	0xcd, 0xd7, 0xef, 0xa8, 0x8f, 0xbe, 0xda, 0x7a, 0x35, 0x86, 0xc6, 0xc9, 0xc4, 0xab, 0xfb, 0x59,
	0xf6, 0xf1, 0xab, 0xb1, 0x2c, 0x47, 0x00, 0xed, 0xc4, 0x15, 0xc8, 0xf6, 0xaa, 0x1f, 0xfc, 0x63,
	0xac, 0x8d, 0xc6, 0xab, 0x55, 0xda, 0x89, 0xab, 0xd5, 0x6c, 0xa6, 0x5a, 0xad, 0x1f, 0x7c, 0xbd,
	0x94, 0x3d, 0xd3, 0x1f, 0xff, 0x1b, 0x00, 0x00, 0xff, 0xff, 0x26, 0xfe, 0x9a, 0x48, 0xce, 0x07,
	0x00, 0x00,
}

func (x WorkflowIdReusePolicy) String() string {
	s, ok := WorkflowIdReusePolicy_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x ParentClosePolicy) String() string {
	s, ok := ParentClosePolicy_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x ContinueAsNewInitiator) String() string {
	s, ok := ContinueAsNewInitiator_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x WorkflowExecutionStatus) String() string {
	s, ok := WorkflowExecutionStatus_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x PendingActivityState) String() string {
	s, ok := PendingActivityState_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x HistoryEventFilterType) String() string {
	s, ok := HistoryEventFilterType_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x RetryState) String() string {
	s, ok := RetryState_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
func (x TimeoutType) String() string {
	s, ok := TimeoutType_name[int32(x)]
	if ok {
		return s
	}
	return strconv.Itoa(int(x))
}
