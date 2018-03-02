DROP Procedure complete_item
GO
CREATE PROCEDURE dbo.complete_item
(
	 @ItemID		int
	, @isCompleted	bit
)
AS
BEGIN
	Update tblItems
	SET isCompleted = @isCompleted
	WHERE ItemID =  @ItemID
 
END